 
import type { InputType } from 'storybook/internal/types';
import { argTypeCategory } from './argTypes.utils';

export const role: InputType = {
	...argTypeCategory('accessibility'),
	description: 'HTML "role" attribute, defines element\'s purpose for accessibility.',
	control: 'text',
};

export const style: InputType = {
	...argTypeCategory('visual'),
	description: 'HTML "style" attribute, inline CSS styling for an element.',
	control: 'object',
};

export const tabIndex: InputType = {
	...argTypeCategory('accessibility'),
	description: 'HTML "tabindex" attribute, specifies element\'s tabbing order.',
	control: 'text',
};

export const id: InputType = {
	...argTypeCategory('data'),
	description: 'HTML "id" attribute, uniquely identifies an element.',
	control: 'text',
};

export const className: InputType = {
	...argTypeCategory('data'),
	description: 'HTML "class" attribute, assigns one or more classes to an element for styling.',
	control: 'text',
};