/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        host: "0.0.0.0",
    },
    images: {
        domains: ['franklin.tatadev.pro'],
    },
    
};

export default nextConfig;
