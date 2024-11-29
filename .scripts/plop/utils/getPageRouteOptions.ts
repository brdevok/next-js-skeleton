import fs from 'fs';
import { reverse } from 'lodash-es';

export const getPageRouteOptions = (): Array<{ name: string; value: string }> => {
	const dirNames: Array<string> = [];

	const getRoutes = (path: string, current?: string): void => {
		const content = fs.readdirSync(path, {
			withFileTypes: true,
		});

		content.forEach((dir) => {
			if (dir.isDirectory()) {
				getRoutes(`${path}${dir.name}/`, `${current || ''}${dir.name}/`);
			}
		});

		if (!current) {
			dirNames.push('/');
		} else if (!current.startsWith('_types')) {
			dirNames.push(current);
		}
	};

	getRoutes('app/');

	return reverse(dirNames).map((route) => {
		return {
			name: route,
			value: `${route === '/' ? '' : route}`,
		};
	});
};
