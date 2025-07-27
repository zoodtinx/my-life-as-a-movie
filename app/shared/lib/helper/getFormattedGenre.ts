

export const getFormattedGenre = (genre: string) => {
  if (!genre) return "";
  // Replace underscores with spaces, lowercase all, then capitalize each word
  return genre
    .toLowerCase()
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};