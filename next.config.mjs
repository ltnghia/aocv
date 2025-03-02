/** @type {import('next').NextConfig} */
import path from 'path';
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
