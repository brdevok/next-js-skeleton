import type { Meta, StoryObj } from '@storybook/react';
import { abstractArgTypes } from '@/storybook/argTypes.collections';
import { argTypeCategory, requiredArgType } from '@/storybook/argTypes.utils';
import A0HelloWorld from './A0HelloWorld';
import { a0HelloWorldDefaultMocks } from './A0HelloWorld.mocks';

const meta: Meta<typeof A0HelloWorld> = {
	title: 'Components/Atoms/A0HelloWorld',
	component: A0HelloWorld,
	tags: ['autodocs'],
	argTypes: {
		...abstractArgTypes,
		message: requiredArgType({
			...argTypeCategory('data'),
			description: 'The message to display below the title.',
			control: 'text',
		}),
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: a0HelloWorldDefaultMocks,
};