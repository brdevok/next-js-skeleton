import type { FC } from 'react';
import A0HelloWorld from '@/components/atoms/a0-hello-world/A0HelloWorld';

import '@/styles/main.scss';

const Page: FC = () => {
	return (
		<>
			<A0HelloWorld message="This is the home page." />
		</>
	);
};

export default Page;
