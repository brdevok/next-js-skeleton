import type { CspConfig } from '@/types/global/Csp';
import { stringifyCspHeader } from './stringifyCspHeader';

const testCspData: CspConfig = {
	'default-src': '\'self\'',
	'script-src': '\'self\' \'unsafe-eval\' \'unsafe-inline\'',
};

describe('stringifyCspHeader', () => {
	it('should return a string formatted to be usable as a CSP header', () => {
		const cspHeader = stringifyCspHeader(testCspData);
		const expectedCspString = 'default-src \'self\';script-src \'self\' \'unsafe-eval\' \'unsafe-inline\';';

		expect(cspHeader).toEqual(expectedCspString);
	});
});