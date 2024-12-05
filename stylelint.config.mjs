import rules from './.rules/stylelint.mjs';

/** @type {import('stylelint').Config} */
export default {
	defaultSeverity: 'error',
	files: ['**/*.scss'],
	plugins: ['stylelint-scss'],
	extends: ['stylelint-config-standard-scss'],
	rules: {
		...rules,
	},
};
