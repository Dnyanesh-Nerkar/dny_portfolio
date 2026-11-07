import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/Dnyanesh_Nerkar_Resume.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
