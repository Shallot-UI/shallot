/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    transpilePackages: ['@shallot-ui/next'],
  },
}

export default nextConfig
