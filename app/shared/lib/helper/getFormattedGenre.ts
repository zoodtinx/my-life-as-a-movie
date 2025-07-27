
export const getFormattedGenre = (genre: string) => {
  if (!genre) return '';
  return genre
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}