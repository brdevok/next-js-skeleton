import type { AbstractProps } from '@/types/components/Props';
import type { ArgTypes } from '@storybook/react';
import { id, className, style, role, tabIndex } from './argTypes';

export const abstractArgTypes: ArgTypes<AbstractProps> = {
	id,
	className,
	style,
	role,
	tabIndex,
};