/* eslint-disable @typescript-eslint/naming-convention */
import type { Plugin } from '@commitlint/types';

const plugin: Plugin = {
	rules: {
		/**
		 * Custom rule to enforce the use of semantic commit message types
		 */
		'custom-type-enum': ({ type }) => {
			const semanticTypes = [
				'feature',
				'fix',
				'docs',
				'style',
				'refactor',
				'test',
				'chore',
				'revert',
				'build',
				'ci',
				'temp',
			];
			const message = `Commit message must start with: ${semanticTypes.join(', ')}`;

			if (!type) {
				return [false, message];
			}
			if (!semanticTypes.includes(type)) {
				return [false, message];
			}

			return [true];
		},

		/**
		 * Custom rule to enforce a minimum and maximum length for the commit header
		 */
		'custom-header-length': ({ header }) => {
			const minLength = 15;
			const maxLength = 80;
			const message = `Header must be between ${minLength} and ${maxLength} characters long, current length is ${header?.length}`;

			if (!header) {
				return [false, message];
			}
			if (header.length < minLength || header.length > maxLength) {
				return [false, message];
			}

			return [true];
		},
	},
};

export default plugin;
