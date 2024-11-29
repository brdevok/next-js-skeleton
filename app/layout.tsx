import type { AbstractLayoutProps } from '@/types/components/Props';
import type { FC } from 'react';

const RootLayout: FC<AbstractLayoutProps> = (props) => {
	return (
		<html lang="en">
			<body>{props.children}</body>
		</html>
	);
};

export default RootLayout;