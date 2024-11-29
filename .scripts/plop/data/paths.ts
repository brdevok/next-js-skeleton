import { CATEGORY, ID, NAME, PREFIX, ROUTE, UBICATION } from './steps';

export const ComponentTemplateBasePath = `templates/component/{{ ${CATEGORY.name} }}/`;
export const ComponentTemplatePath = `${ComponentTemplateBasePath}/*.*`;
export const ComponentDestinationPath = `src/components/{{ ${CATEGORY.name} }}s/{{ lowerCase ${PREFIX.name} }}{{ ${ID.name} }}-{{ kebabCase ${NAME.name} }}/`;
export const OtherComponentDestinationPath = `src/components/{{ ${UBICATION.name} }}/{{ lowerCase ${PREFIX.name} }}{{ ${ID.name} }}-{{ kebabCase ${NAME.name} }}/`;

export const ContextTemplateBasePath = `templates/context/`;
export const ContextTemplatePath = `${ContextTemplateBasePath}/*.*`;
export const ContextDestinationPath = `src/contexts/{{ kebabCase ${NAME.name} }}/`;

export const PageTemplateBasePath = `templates/page/`;
export const PageDirectoryTemplateBasePath = `templates/base-page/`;
export const PageTemplatePath = `${PageTemplateBasePath}/*.*`;
export const PageDirectoryTemplatePath = `${PageDirectoryTemplateBasePath}/*.*`;
export const PageDestinationPath = `app/{{ ${ROUTE.name} }}`;
export const PageDirectoryDestinationPath = `app/{{ ${ROUTE.name} }}{{ kebabCase ${NAME.name} }}/`;
