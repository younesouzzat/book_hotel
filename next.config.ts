import { Configuration } from "webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config: Configuration) {
    // Adding rule for .svg files
    config?.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;