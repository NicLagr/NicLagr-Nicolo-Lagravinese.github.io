// Utility function to get the correct image path for GitHub Pages subdirectory deployment
export const getImagePath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, prepend the subdirectory path
  if (process.env.NODE_ENV === 'production') {
    return `/NicoloLagr.github.io/${cleanPath}`;
  }
  
  // In development, use the path as-is with leading slash
  return `/${cleanPath}`;
};
