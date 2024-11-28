/* eslint-disable @typescript-eslint/naming-convention */
import globals from 'globals';
import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import rules from './.eslint/rules.mjs';

/** @type {import('eslint').Linter.Config[]} */
export default tsEslint.config({
	ignores: ['.next/**'],
	files: ['**/*.{js,mjs,ts,tsx}'],
	languageOptions: {
		globals: globals.browser,
		parser: tsEslint.parser,
		parserOptions: {
			projectService: true,
			tsconfigRootDir: import.meta.dirname,
		},
	},
	plugins: {
		'@typescript-eslint': tsEslint.plugin,
		'@next/next': nextPlugin,
	},
	rules: {
		...eslint.configs.recommended.rules,
		...tsEslint.configs.recommended.rules,
		...nextPlugin.configs.recommended.rules,
		...nextPlugin.configs['core-web-vitals'].rules,
		...rules,
		// Override conflictive rules for prettier
		...eslintConfigPrettier.rules,
	},
});
