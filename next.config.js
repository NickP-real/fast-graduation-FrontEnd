/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/main",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
