/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        host: "0.0.0.0",
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname:'franklin.tatadev.pro'
            }
        ]
    },
    
};

export default nextConfig;
