export function filterThumbnails(data) {
  return data.filter((i) => i.poster_path !== null);
}
