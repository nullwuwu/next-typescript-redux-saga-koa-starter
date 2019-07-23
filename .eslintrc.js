module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'prettier/flowtype',
		'prettier/react',
		'prettier/standard',
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		useJSXTextNode: true,
		project: './tsconfig.json',
		tsconfigRootDir: './',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'prettier/prettier': 'error',
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				allowSingleExtends: true,
			},
		],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'react/prop-types': 'off',
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{ accessibility: 'no-public' },
		],
		'@typescript-eslint/interface-name-prefix': 'off'
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
