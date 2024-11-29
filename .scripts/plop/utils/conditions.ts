import type { Answers } from 'inquirer';
import { CATEGORY, DIRECTORY, TEMPLATE } from '../data/steps';
import { ComponentType, TemplateType } from '../data/types';

export const isComponent = (answers: Answers): boolean => {
	return answers[TEMPLATE.name] === TemplateType.Component;
};

export const isContext = (answers: Answers): boolean => {
	return answers[TEMPLATE.name] === TemplateType.Context;
};

export const isPage = (answers: Answers): boolean => {
	return answers[TEMPLATE.name] === TemplateType.Page;
};

export const isOther = (answers: Answers): boolean => {
	return answers[CATEGORY.name] === ComponentType.Other;
};

export const isDirectoryPath = (answers: Answers): boolean => {
	return answers[DIRECTORY.name] === true;
};
