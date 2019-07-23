module.exports = {
	plugins: [
		require('postcss-preset-env')({ stage: 2 }),
		require('postcss-url')(),
        require('postcss-import')(),
        require('cssnano')(),
	],
}
