import { type NodePlopAPI } from 'plop';
import {
	ComponentDestinationPath,
	ComponentTemplateBasePath,
	ComponentTemplatePath,
	ContextDestinationPath,
	ContextTemplateBasePath,
	ContextTemplatePath,
	OtherComponentDestinationPath,
	PageDestinationPath,
	PageDirectoryDestinationPath,
	PageDirectoryTemplateBasePath,
	PageDirectoryTemplatePath,
	PageTemplateBasePath,
	PageTemplatePath,
} from './data/paths';
import { isComponent, isContext, isDirectoryPath, isOther, isPage } from './utils/conditions';
import { isID, isName, isPrefix } from './utils/validations';
import { CATEGORY, DIRECTORY, ID, NAME, PREFIX, ROUTE, TEMPLATE, UBICATION } from './data/steps';

const createTemplate = (plop: NodePlopAPI): void => {
	plop.setGenerator('template', {
		description: 'Generate easy React component templates',
		prompts: [
			{
				type: TEMPLATE.type,
				name: TEMPLATE.name,
				message: TEMPLATE.question,
				choices: TEMPLATE.options,
			},
			{
				when: isComponent,
				type: CATEGORY.type,
				name: CATEGORY.name,
				message: CATEGORY.question,
				choices: CATEGORY.options,
			},
			{
				when: isOther,
				type: PREFIX.type,
				name: PREFIX.name,
				message: PREFIX.question,
				validate: isPrefix,
			},
			{
				when: isComponent,
				type: ID.type,
				name: ID.name,
				message: ID.question,
				validate: isID,
			},
			{
				when: isOther,
				type: UBICATION.type,
				name: UBICATION.name,
				message: UBICATION.question,
				choices: UBICATION.options,
			},
			{
				when: isPage,
				type: ROUTE.type,
				name: ROUTE.name,
				message: ROUTE.question,
				choices: ROUTE.options,
			},
			{
				type: NAME.type,
				name: NAME.name,
				message: NAME.question,
				validate: isName,
			},
			{
				when: isPage,
				type: DIRECTORY.type,
				name: DIRECTORY.name,
				message: DIRECTORY.question,
			},
		],
		actions: (answers) => {
			if (answers && isComponent(answers)) {
				return [
					{
						skipIfExists: true,
						verbose: true,
						type: 'addMany',
						base: ComponentTemplateBasePath,
						templateFiles: ComponentTemplatePath,
						destination: isOther(answers) ? OtherComponentDestinationPath : ComponentDestinationPath,
						stripExtensions: ['txt'],
						data: !isOther(answers)
							? {
									[PREFIX.name]: (answers[CATEGORY.name] as string)[0],
								}
							: {},
					},
				];
			} else if (answers && isContext(answers)) {
				return [
					{
						skipIfExists: true,
						verbose: true,
						type: 'addMany',
						base: ContextTemplateBasePath,
						templateFiles: ContextTemplatePath,
						destination: ContextDestinationPath,
						stripExtensions: ['txt'],
					},
				];
			} else if (answers && isPage(answers)) {
				return [
					{
						skipIfExists: true,
						verbose: true,
						type: 'addMany',
						base: isDirectoryPath(answers) ? PageDirectoryTemplateBasePath : PageTemplateBasePath,
						templateFiles: isDirectoryPath(answers) ? PageDirectoryTemplatePath : PageTemplatePath,
						destination: isDirectoryPath(answers) ? PageDirectoryDestinationPath : PageDestinationPath,
						stripExtensions: ['txt'],
					},
				];
			}

			return [];
		},
	});
};

export default createTemplate;
