import { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: '**'}]
  }
}

module.exports = nextConfig

