/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/lava-workshop",
    reactStrictMode: true,
    images:{
        loader:"custom",
        loaderFile:"src/custom-image-loader.js",
    }
    
};

export default nextConfig;
