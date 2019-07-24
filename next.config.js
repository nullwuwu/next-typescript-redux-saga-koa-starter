/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')

// - 环境变量
let current = { ...process.env }
const result = dotenv.config()

if (!result.error) {
	current = { ...current, ...result.parsed }
}

let blueprint = { NODE_ENV: process.env.NODE_ENV }

try {
	blueprint = {
		...blueprint,
		...dotenv.parse(fs.readFileSync('./.env', 'utf8')),
	}
} catch (err) {
	console.log(err)
}

const rules = Object.keys(blueprint).reduce((obj, key) => {
	obj[`process.env.${key}`] = JSON.stringify(current[key])
	return obj
}, {})

// - webpack configure
const config = {
	webpack: (config) => {
		// - plugins configure
		config.plugins = config.plugins || []

		config.plugins = [
			...config.plugins,

			// Read the .env file
			new webpack.DefinePlugin(rules),
		]

		// - alias
		config.resolve.alias['$components'] = path.join(
			__dirname,
			'client/components',
		)
		config.resolve.alias['$stories'] = path.join(
			__dirname,
			'client/stories',
		)
		config.resolve.alias['$redux'] = path.join(__dirname, 'client/redux')

		return config
	},
}

// - sass-loader configure
const configBeWithSass = (baseConfig) => {
	const sassConfig = {
		cssModules: true,
		cssLoaderOptions: {
			importLoaders: 1,
			localIdentName: '[local]___[hash:base64:5]',
		},
	}

	return withSass(Object.assign(sassConfig, baseConfig))
}

module.exports = withTypescript(configBeWithSass(config))
