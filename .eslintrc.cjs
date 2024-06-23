/* eslint-env node */

module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: {
		react: { version: '18.2' },
		'import/resolver': {
			typescript: {}
		}
	},
	plugins: ['react-refresh', 'import'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		semi: ['error', 'always', { omitLastInOneLineBlock: false }],
		'comma-dangle': ['error', 'never'],
		quotes: ['error', 'single'],
		'react/prop-types': 'off',
		indent: ['error', 'tab'],
		'@typescript-eslint/no-explicit-any': 'off',
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'object', 'type', 'index'],
				pathGroups: [
					{
						pattern: '*.css',
						group: 'index',
						position: 'after'
					}
				],
				pathGroupsExcludedImportTypes: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'object',
					'type',
					'index'
				],
				'newlines-between': 'always',
				alphabetize: { order: 'asc', caseInsensitive: true }
			}
		],
		'import/no-unresolved': 'off'
	}
};
