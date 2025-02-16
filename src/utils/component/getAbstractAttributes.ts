import type { AbstractProps } from '@/types/components/Props';

/**
 * Extracts and returns a subset of properties from a given props object,
 * including standard HTML attributes, ARIA attributes, and data attributes.
 *
 * This utility function is designed to filter and return specific properties
 * from the provided `props` object. It extracts standard attributes such as
 * `id`, `className`, `style`, `role`, and `tabIndex`, as well as any attributes
 * that start with `aria-` (ARIA attributes) or `data-` (data attributes).
 *
 * @param {Partial<AbstractProps>} props - The props object from which to extract attributes.
 *
 * @returns {Partial<AbstractProps>} - A new object containing the extracted attributes.
 *
 * @example
 * const props = {
 *   id: 'element-id',
 *   className: 'element-class',
 *   style: { color: 'red' },
 *   role: 'button',
 *   tabIndex: 0,
 *   'aria-label': 'close button',
 *   'data-custom': 'custom data',
 *   count: 100,
 *   isActive: true,
 *   onClick: () => {},
 * };
 *
 * const abstractAttributes = getAbstractAttributes(props);
 * // abstractAttributes will be:
 * // {
 * //   id: 'element-id',
 * //   className: 'element-class',
 * //   style: { color: 'red' },
 * //   role: 'button',
 * //   tabIndex: 0,
 * //   'aria-label': 'close button',
 * //   'data-custom': 'custom data',
 * // }
 */
export const getAbstractAttributes = (props: Partial<AbstractProps>): Partial<AbstractProps> => {
	const getOtherAttributes = (): object => {
		return Object.fromEntries(
			Object.entries(props).filter(([key]) => {
				return key.startsWith('aria-') || key.startsWith('data-');
			}),
		);
	};

	return {
		id: props.id,
		className: props.className,
		style: props.style,
		role: props.role,
		tabIndex: props.tabIndex,
		...getOtherAttributes(),
	};
};
