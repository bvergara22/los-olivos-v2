import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'losolivoscartagena.sfo3.digitaloceanspaces.com',
            },
            {
                protocol: 'https',
                hostname: 'portalolivoscartagena.sfo3.digitaloceanspaces.com',
                pathname: '/blog/**',
            },
        ],
    },
    trailingSlash: true,
};

export default nextConfig;
