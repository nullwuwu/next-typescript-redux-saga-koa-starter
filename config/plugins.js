const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = [
    new webpack.DefinePlugin({
        'process.env.BROWSER': true,
    }),

    // new HtmlWebpackPlugin(
    //     Object.assign(
    //       {},
    //       {
    //         inject: true,
    //         template: paths.html,
    //       },
    //       isEnvProduction
    //         ? {
    //             minify: {
    //               removeComments: true,
    //               collapseWhitespace: true,
    //               removeRedundantAttributes: true,
    //               useShortDoctype: true,
    //               removeEmptyAttributes: true,
    //               removeStyleLinkTypeAttributes: true,
    //               keepClosingSlash: true,
    //               minifyJS: true,
    //               minifyCSS: true,
    //               minifyURLs: true,
    //             },
    //           }
    //         : undefined
    //     )
    // )
]