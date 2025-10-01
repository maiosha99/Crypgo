//  @type {import('next').NextConfig} 
const isProd = process.env.NODE_ENV === "production";
const isVercel = !!process.env.VERCEL; // عشان يفرّق بين Vercel و GitHub Pages

const nextConfig = {
  basePath: isProd && !isVercel ? "/Crypgo" : "",
  assetPrefix: isProd && !isVercel ? "/Crypgo/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
