import type { Answers } from 'inquirer';
import { isComponent, isContext, isPage } from './conditions';
import { ComponentType } from '../data/types';
import { CATEGORY } from '../data/steps';

export const isPrefix = (input: string): string | boolean => {
	if (input.length !== 1) {
		return 'The prefix should have a length of 1.';
	} else if (!/[a-zA-Z]/u.test(input)) {
		return 'The prefix must contain letters only.';
	}
	return true;
};

export const isID = (input: string): string | boolean => {
	if (!/^[[0-9]+$/u.test(input)) {
		return 'The ID must be a number.';
	} else if (input.length > 1 && /^0+/u.test(input)) {
		return "The ID can't start with zero/es";
	}
	return true;
};

export const isName = (input: string, answers: Answers): string | boolean => {
	if (isComponent(answers) || isContext(answers)) {
		if (!/^[a-zA-Z ]+$/u.test(input)) {
			return 'The name must contain letters and white spaces only.';
		}
	} else if (isPage(answers)) {
		if (!/^\[?[a-zA-Z0-9 -]+\]?$/u.test(input)) {
			return 'The route name must contain letters, numbers, hyphens and white spaces only';
		}
	}

	return true;
};

export const isBlockComponent = (answers: Answers): string | boolean => {
	if (answers[CATEGORY.name] !== ComponentType.Block) {
		return 'Component is not a block.';
	}

	return true;
};
