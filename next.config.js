/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["www.ignant.com"], // Add the required image domain here
    },
};

module.exports = nextConfig;
