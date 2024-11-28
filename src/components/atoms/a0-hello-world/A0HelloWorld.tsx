import type { FC } from 'react';
import type { A0HelloWorldProps } from './A0HelloWorld.types';

import css from './A0HelloWorld.module.scss';

const A0HelloWorld: FC<A0HelloWorldProps> = () => {
	return (
		<div className={css.main}>
			<h1>Hello World!</h1>
		</div>
	);
};

export default A0HelloWorld;
