export function getImagePrefix() {
  if (process.env.NODE_ENV === "production") {
    // لو انتِ على GitHub Pages
    return "/Crypgo/";
  }
  // لو انتِ على Vercel أو local
  return "/";
}
