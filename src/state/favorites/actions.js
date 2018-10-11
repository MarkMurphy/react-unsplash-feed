import * as types from './types';
import { getIsFavorite } from './selectors';

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
    type: getIsFavorite(getState(), image.id)
      ? types.REMOVE_FAVORITE
      : types.ADD_FAVORITE,
    payload: image,
  });
