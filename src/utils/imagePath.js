// Utility function to get the correct image path for GitHub Pages subdirectory deployment
export const getImagePath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, use root path since this is now a user site (username.github.io)
  if (process.env.NODE_ENV === 'production') {
    return `/${cleanPath}`;
  }
  
  // In development, use the path as-is with leading slash
  return `/${cleanPath}`;
};
