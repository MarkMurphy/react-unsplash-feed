export const getFavorites = (state) => Object.values(state.favorites);
export const getIsFavorite = (state, id) =>
  Object.keys(state.favorites).includes(id);
