export const selectFavorites = (state) => Object.values(state.favorites);
export const selecttIsFavorite = (state, id) =>
  Object.keys(state.favorites).includes(id);
