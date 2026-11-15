import type { NextConfig } from "next";

// Na GitHub Pages sajt živi na podadresi /netifystudio.
// Workflow postavlja PAGES_BASE_PATH; lokalno je prazno pa sajt radi na /.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // cacheComponents / partialPrefetching (PPR) ne rade sa statičkim exportom
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
