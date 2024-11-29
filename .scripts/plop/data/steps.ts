import { getPageRouteOptions } from '../utils/getPageRouteOptions';
import type { Step } from './steps.types';
import { ComponentType, TemplateType } from './types';

export const TEMPLATE: Step = {
	type: 'list',
	name: 'template',
	question: 'Which kind of template do you want to use?',
	options: [
		{ name: 'Component', value: TemplateType.Component },
		{ name: 'Context', value: TemplateType.Context },
		{ name: 'Page', value: TemplateType.Page },
	],
};

export const CATEGORY: Step = {
	type: 'list',
	name: 'category',
	question: 'Which kind of component is this?',
	options: [
		{ name: 'Atom', value: ComponentType.Atom },
		{ name: 'Molecule', value: ComponentType.Molecule },
		{ name: 'Organism', value: ComponentType.Organism },
		{ name: 'Block', value: ComponentType.Block },
		{ name: 'Other', value: ComponentType.Other },
	],
};

export const PREFIX: Step = {
	type: 'input',
	name: 'prefix',
	question: 'What is the prefix of the new component?',
};

export const ID: Step = {
	type: 'number',
	name: 'id',
	question: 'What is the ID of the new component?',
};

export const UBICATION: Step = {
	type: 'list',
	name: 'ubication',
	question: 'Where do you want to create the component?',
	options: [
		{ name: 'atoms/', value: 'atoms' },
		{ name: 'molecules/', value: 'molecules' },
		{ name: 'organisms/', value: 'organisms' },
		{ name: 'blocks/', value: 'blocks' },
	],
};

export const ROUTE: Step = {
	type: 'list',
	name: 'route',
	question: 'Where do you want to create the page?',
	options: getPageRouteOptions(),
};

export const NAME: Step = {
	type: 'input',
	name: 'name',
	question: 'How would you like to name the generated template?',
};

export const DIRECTORY: Step = {
	type: 'confirm',
	name: 'directory',
	question: 'Create route as a new path directory?',
};
