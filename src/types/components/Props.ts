import type { AriaAttributes, AriaRole, CSSProperties, ReactNode } from 'react';

export type AbstractProps = {
	children?: ReactNode;
	id?: string;
	className?: string;
	role?: AriaRole;
	tabIndex?: number;
	style?: CSSProperties;
} & Record<`data-${string}`, string | number | boolean | null | undefined> &
	AriaAttributes;

export type AbstractLayoutProps = Pick<AbstractProps, 'children'>;
