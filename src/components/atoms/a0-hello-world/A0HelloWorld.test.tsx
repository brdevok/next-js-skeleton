import A0HelloWorld from './A0HelloWorld';
import { render } from '@testing-library/react';

describe('A0HelloWorld', () => {
	it('should render a title with a custom message', () => {
		const title = 'Hello World!';
		const message = 'My custom test message';

		const { getByText } = render(<A0HelloWorld message={message} />);

		expect(getByText(title)).toBeDefined();
		expect(getByText(message)).toBeDefined();
	});
});
