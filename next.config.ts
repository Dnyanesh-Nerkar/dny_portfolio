import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files.
  output: "export",
  // Set by the deploy workflow, e.g. "/dny_portfolio". Empty for local development.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  // Emits /resume/index.html, which Pages serves at /resume/ without a server rewrite.
  trailingSlash: true,
};

export default nextConfig;
