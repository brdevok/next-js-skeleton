import type { InputType } from 'storybook/internal/types';
import type { Category } from './argTypes.types';

export const argTypeCategory = (name: Category): Pick<InputType, 'table'> => {
	return {
		table: {
			category: name,
		},
	};
};

export const requiredArgType = (argType: InputType): InputType => {
	return {
		...argType,
		type: {
			...(typeof argType.type === 'object'
				? argType.type
				: { name: argType.type as 'string' | 'number' | 'boolean' | 'symbol' | 'function' }),
			required: true,
		},
	};
};

export const disabledArgType = (): InputType => {
	return {
		table: {
			disable: true,
		},
	};
};
