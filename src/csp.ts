import type { CspConfig } from '@/types/global/Csp';
import { stringifyCspHeader } from './utils/global/stringifyCspHeader';

const config: CspConfig = {
	/* eslint-disable @stylistic/quotes */
	'default-src': "'self'",
	'script-src': "'self' 'unsafe-eval' 'unsafe-inline'",
	'style-src': "'self' 'unsafe-inline'",
	'img-src': "'self' blob: data:",
	'font-src': "'self'",
	'object-src': "'none'",
	'base-uri': "'self'",
	'form-action': "'self'",
	'frame-ancestors': "'none'",
	/* eslint-enable @stylistic/quotes */
};

const cspHeader = {
	key: 'Content-Security-Policy',
	value: stringifyCspHeader(config),
} as const;

export default cspHeader;
