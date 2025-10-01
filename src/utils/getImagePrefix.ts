export function getImagePrefix() {
  // If you set NEXT_PUBLIC_BASE_PATH in environment, use it.
  const envPrefix = process.env.NEXT_PUBLIC_BASE_PATH;
  if (typeof envPrefix === "string" && envPrefix.length > 0) {
    return envPrefix.replace(/\/$/, ""); // remove trailing slash
  }

  // fallback: detect environments
  if (typeof process.env.VERCEL !== "undefined") {
    return ""; // Vercel => no basePath
  }
  if (typeof process.env.GITHUB_ACTIONS !== "undefined") {
    return "/Crypgo"; // GitHub Pages build via Actions
  }

  return ""; // local dev
}
