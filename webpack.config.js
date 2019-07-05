const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

// Optimize plugins
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// path configure
const paths = require('./config/paths')

// style files regexes
const cssRegex = /\.css$/;
// const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
// const sassModuleRegex = /\.module\.(scss|sass)$/;


module.exports = (env, { mode }) => {
  const isProduction = mode === 'production'
  const isDevelopment = mode === 'development'

  const hasHash = isProduction
  const publicPath = '/'

  // -- 出口 --
  const output = {
    path: paths.appOutput,
    media: '[hash].[ext]',
    font: '[hash].[ext]',
    css: `[name]${hasHash ? '.[contenthash]' : ''}.css`,
    js: `[name]${hasHash ? '.[chunkhash]' : ''}.js`,
    vendor: '[name].js',
  }

  // -- 公用 --
  const common = {
    output: {
      path: output.path,
      filename: output.js,
      publicPath: '/'
    },
    resolve: {
      symlinks: false,
      extensions: ['.js', '.ts', '.tsx'],
      mainFields: ['module', 'browser', 'main'],
      alias: {
        app: paths.appAlias,
      },
    },
    module: {
      rules: [
        // .ts, .tsx
        {
          test: /\.tsx?$/,
          use: [
            !isProduction && {
              loader: 'babel-loader',
              options: { plugins: ['react-hot-loader/babel'] }
            },
            'ts-loader'
          ].filter(Boolean)
        },
        // css
        {
          test: cssRegex,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: !isProduction,
                importLoaders: 1,
                localIdentName: isProduction
                  ? '[hash:base64:5]'
                  : '[local]__[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('postcss-import')({ addDependencyTo: webpack }),
                  require('postcss-url')(),
                  require('postcss-preset-env')({
                    /* use stage 2 features (defaults) */
                    stage: 2
                  }),
                  require('postcss-reporter')(),
                  require('postcss-browser-reporter')({
                    disabled: isProduction
                  })
                ]
              }
            },
          ]
        },
        // scss
        {
          test: sassRegex,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: !isProduction,
                importLoaders: 1,
                localIdentName: isProduction
                  ? '[hash:base64:5]'
                  : '[local]__[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('postcss-import')({ addDependencyTo: webpack }),
                  require('postcss-url')(),
                  require('postcss-preset-env')({
                    /* use stage 2 features (defaults) */
                    stage: 2
                  }),
                  require('postcss-reporter')(),
                  require('postcss-browser-reporter')({
                    disabled: isProduction
                  })
                ]
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        // static assets
        { test: /\.(a?png|svg)$/, use: 'url-loader?limit=10000' },
        {
          test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
          use: 'file-loader'
        }
      ]
    },
    plugins: [
      new WebpackCleanupPlugin()
    ]
  }

  // -- 开发环境 --
  const development = {
    entry: ['react-hot-loader/patch', paths.src],
    optimization: {
      nodeEnv: 'development',
      minimize: false,
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      hot: true,
      open: false,
      host: 'localhost',
      disableHostCheck: true,
      historyApiFallback: true,
      stats: 'errors-only',
      overlay: {
        errors: true,
        warnings: true,
      },
      proxy: {},
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: paths.html,
        minify: {
          useShortDoctype: true,
          collapseWhitespace: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
          removeAttributeQuotes: false,
          removeScriptTypeAttributes: false,
          removeStyleLinkTypeAttributes: false,
        },
      }),
    ]
  }

  // -- 正式环境 --
  const production = {
    mode: 'production',
    entry: {
      app: paths.src
    },
    output: {
      publicPath,
      path: output.path,
      filename: output.js,
      chunkFilename: output.js
    },
    cache: true,
    parallelism: 4,
    optimization: {
      namedChunks: true,
      nodeEnv: 'production',
      minimize: true,
      minimizer: [
        new TerserWebpackPlugin({
          cache: true,
          parallel: true,
          terserOptions: {
            output: {
              comments: false,
            },
          },
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorPluginOptions: {
            preset: ['default', {
              discardComments: {
                removeAll: true,
              },
            }],
          },
        }),
      ],
    },
    stats: {
      children: false,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new MiniCssExtractPlugin({
        filename: output.css,
      }),
    ]
  }

  return merge(
    common,
    isDevelopment
    ? development
    : production
  )
}
