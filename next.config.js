/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["live.staticflickr.com"],
  },
};

export default nextConfig;

export function webpack(config, { isServer }) {
  if (isServer) {
    config.externals = config.externals || [];
    config.externals.push("paper");
  }
  return config;
}
