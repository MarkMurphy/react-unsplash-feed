import * as types from './types';
import { selecttIsFavorite } from './selectors';

export const addFavorite = (image) => ({
  type: types.ADD_FAVORITE,
  payload: image,
});

export const removeFavorite = (id) => ({
  type: types.REMOVE_FAVORITE,
  payload: {
    id,
  },
});

export const toggleFavorite = (image) => (dispatch, getState) =>
  dispatch({
    type: selecttIsFavorite(getState(), image.id)
      ? types.REMOVE_FAVORITE
      : types.ADD_FAVORITE,
    payload: image,
  });
