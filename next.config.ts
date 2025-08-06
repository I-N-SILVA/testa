import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Alias motion to framer-motion to handle the @plyaz/ui dependency issue
    config.resolve.alias = {
      ...config.resolve.alias,
      'motion/react': 'framer-motion',
      'motion': 'framer-motion',
    };
    return config;
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
