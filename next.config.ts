import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	sassOptions: {
		silenceDeprecations: ['import', 'legacy-js-api'],
	},
};

export default nextConfig;
