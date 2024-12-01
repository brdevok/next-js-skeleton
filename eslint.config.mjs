/* eslint-disable @typescript-eslint/naming-convention */
import globals from 'globals';
import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import stylisticPlugin from '@stylistic/eslint-plugin';
import nextPlugin from '@next/eslint-plugin-next';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import storybookPlugin from 'eslint-plugin-storybook';
import eslintConfigPrettier from 'eslint-config-prettier';
import rules from './.rules/eslint.mjs';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: ['.next/**'],
		files: ['**/*.{js,mjs,ts,tsx}'],
		languageOptions: {
			parser: tsEslint.parser,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		plugins: {
			'storybook': storybookPlugin,
			'react-hooks': reactHooksPlugin,
			'@stylistic': stylisticPlugin,
			'@typescript-eslint': tsEslint.plugin,
			'@next/next': nextPlugin,
		},
		rules: {
			...eslint.configs.recommended.rules,
			...tsEslint.configs.recommended.rules,
			...stylisticPlugin.configs['recommended-flat'].rules,
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
			...storybookPlugin.configs.recommended.rules,
			...rules,
			// Override conflictive rules for prettier
			...eslintConfigPrettier.rules,
		},
	},
];
