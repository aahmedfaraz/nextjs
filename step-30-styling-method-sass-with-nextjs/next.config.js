/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    outputStyle: 'compressed'
    // ...add any SASS configuration here
  }
}

module.exports = nextConfig
