import { type UserConfig, RuleConfigSeverity } from '@commitlint/types';
import customRulesPlugin from './.rules/commitlint';

const Configuration: UserConfig = {
	extends: ['@commitlint/config-conventional'],
	parserPreset: 'conventional-changelog-atom',
	formatter: '@commitlint/format',
	plugins: [customRulesPlugin],
	rules: {
		'custom-type-enum': [RuleConfigSeverity.Error, 'always'],
		'custom-header-length': [RuleConfigSeverity.Error, 'always'],
		// Turn off confilicting rules
		'type-empty': [RuleConfigSeverity.Disabled],
		'subject-empty': [RuleConfigSeverity.Disabled],
	},
};

export default Configuration;
