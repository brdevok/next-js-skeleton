import type { AbstractProps } from '@/types/components/Props';
import { getAbstractAttributes } from './getAbstractAttributes';

const goodProps: AbstractProps & Record<string, any> = {
	'id': 'test-id',
	'className': 'test-class',
	'role': 'tab',
	'tabIndex': 1,
	'style': { color: 'red' },
	'aria-describedby': 'test-aria',
	'data-test': 'test-data',
};

const badProps = {
	'otherProp': 'test-other',
	'custom-attribute': 'test-custom',
};

describe('getAbstractAttributes', () => {
	it('should return an object with all abstract props and attributes filtered', () => {
		const abstractAttributes = getAbstractAttributes({ ...goodProps, ...badProps });
		expect(abstractAttributes).toEqual(goodProps);
	});

	it('"getAriaAttribute" and "getDataAttribute" should not be called if no implicated props are provided', () => {
		const abstractAttributes = getAbstractAttributes(goodProps);
		expect(abstractAttributes).toEqual(goodProps);
	});
});
