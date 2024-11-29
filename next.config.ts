import type { NextConfig } from 'next';
import cspHeader from '@/csp';

const nextConfig: NextConfig = {
	sassOptions: {
		silenceDeprecations: ['import', 'legacy-js-api'],
	},
	// eslint-disable-next-line require-await
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [cspHeader],
			},
		];
	},
};

export default nextConfig;
