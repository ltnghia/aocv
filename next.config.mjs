/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: { 
        unoptimized: true,
        loader:"custom",
        loaderFile: path.resolve(__dirname, 'src/custom-image-loader.js'),
    },
    basePath: '/aocv'
};

export default nextConfig;
