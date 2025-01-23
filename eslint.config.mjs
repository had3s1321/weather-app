import js from '@eslint/js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended
});

const eslintConfig = [
	...compat.config({
		extends: [
			'next/core-web-vitals',
			'next/typescript',
			'eslint:recommended',
			'plugin:react/recommended',
			'plugin:react-hooks/recommended',
			'plugin:prettier/recommended'
		],
		rules: {
			'no-console': 'error',
			'no-param-reassign': 'error',
			'no-unused-vars': 'error',
			'prefer-const': 'error',
			'for-direction': 'error',
			'no-multiple-empty-lines': ['error', { max: 1 }],
			'react/no-array-index-key': 'warn',
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
			'no-undef': 'off'
		},
		plugins: ['react'],
		settings: {
			react: {
				version: 'detect'
			}
		}
	})
];

export default eslintConfig;
