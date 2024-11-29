import type { CspConfig } from '@/types/global/Csp';

export const stringifyCspHeader = (config: CspConfig): string => {
	return Object.entries(config)
		.map(([directive, value]) => {
			return `${directive} ${value};`;
		})
		.join('');
};
