/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ["live.staticflickr.com"],
  },
  basePath: '',
  trailingSlash: true,
};

export default nextConfig;

export function webpack(config, { isServer }) {
  if (isServer) {
    config.externals = config.externals || [];
    config.externals.push("paper");
  }
  return config;
}
