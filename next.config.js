/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname:
          "fredqah54zct.objectstorage.eu-frankfurt-1.oci.customer-oci.com",
      },
      {
        hostname: "objectstorage.eu-frankfurt-1.oraclecloud.com",
      },
      {
        hostname: "cdn.discordapp.com",
      },
    ],
  },
};

module.exports = nextConfig;
