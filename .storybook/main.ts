import type { StorybookConfig } from '@storybook/nextjs';
import { resolve } from 'path';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(ts|tsx)'],
	staticDirs: ['..\\public'],
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript',
	},
	webpackFinal(wp) {
		wp.resolve = {
			...wp.resolve,
			alias: {
				...wp.resolve?.alias,
				/* eslint-disable @typescript-eslint/naming-convention */
				'@': resolve(process.cwd(), 'src'),
				_app: resolve(process.cwd(), 'app'),
				_public: resolve(process.cwd(), 'public'),
				_storybook: resolve(process.cwd(), '.storybook'),
				/* eslint-enable @typescript-eslint/naming-convention */
			},
		};

		return wp;
	},
};
export default config;
