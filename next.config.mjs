/** @type {import('next').NextConfig} */
import path from 'path';
// Resolve the current directory using import.meta.url (ES module approach)
const __dirname = path.dirname(new URL(import.meta.url).pathname);
// Ensure loaderFile points to the correct relative path
const loaderFilePath = path.resolve(__dirname, 'src/custom-image-loader.js');

const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: { 
        unoptimized: true,
        loader:"custom",
        loaderFile: loaderFilePath,
    },
    basePath: '/aocv'
};

export default nextConfig;
