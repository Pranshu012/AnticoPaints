const isGithubPages =
  process.env.GITHUB_PAGES === "true" ||
  process.env.NEXT_PUBLIC_BASE_PATH === "/AnticoPaints";
const basePath = isGithubPages ? "/AnticoPaints" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_WEB3FORMS_KEY: "d12c311d-16aa-4ba5-9d33-3a831a3ad8e4",
  },
};

export default nextConfig;
