import type { FC } from 'react';
import clsx from 'clsx';
import { getAbstractAttributes as attr } from '@/utils/component/getAbstractAttributes';
import type { A0HelloWorldProps } from './A0HelloWorld.types';

import css from './A0HelloWorld.module.scss';

const A0HelloWorld: FC<A0HelloWorldProps> = (props) => {
	return (
		<div {...attr(props)} className={clsx(css.main, props.className)}>
			<h1>Hello World!</h1>
			<p>{props.message}</p>
		</div>
	);
};

export default A0HelloWorld;
