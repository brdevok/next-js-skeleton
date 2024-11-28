import type { Preview } from '@storybook/react';

const preview: Preview = {
	parameters: {
		layout: 'fullscreen',
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/iu,
				date: /Date$/iu,
			},
		},
		options: {
			storySort: {
				method: 'alphabetical',
				order: ['Styleguide', 'Components', ['Atoms', 'Molecules', 'Organisms', 'Blocks'], 'Templates'],
			},
		},
	},
	argTypes: {
		key: {
			table: {
				disable: true,
			},
		},
		children: {
			table: {
				disable: true,
			},
		},
		suppressHydrationWarning: {
			table: {
				disable: true,
			},
		},
	},
};

export default preview;
