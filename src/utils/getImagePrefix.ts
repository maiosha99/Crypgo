export function getImagePrefix() {
  if (process.env.NODE_ENV === "production") {
   
    return "/Crypgo/";
  }
  return "/";
}
