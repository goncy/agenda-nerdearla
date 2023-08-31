/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/",
      destination: "/all",
    },
  ],
};

module.exports = nextConfig;
