import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	compiler: {
		styledComponents: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'flagsapi.com',
				port: '',
				pathname: '/**',
				search: ''
			}
		]
	}
};

export default nextConfig;
