import rules from './.rules/stylelint.mjs';

/** @type {import('stylelint').Config} */
export default {
	defaultSeverity: 'warning',
	files: ['**/*.scss'],
	plugins: ['stylelint-scss'],
	rules: {
		...rules,
	},
};
