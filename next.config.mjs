/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: { 
        unoptimized: true,
        loader:"custom",
        loaderFile: 'src/custom-image-loader.js',
    },
    basePath: '/aocv'
};

export default nextConfig;
