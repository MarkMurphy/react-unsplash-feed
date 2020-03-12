import { ADD_FAVORITE, REMOVE_FAVORITE } from './types';

export const initialState = {};

const set = (state, key, value) => {
  return { ...state, [key]: value };
};

const del = (state, key) => {
  const { [key]: _, ...filtered } = state;
  return filtered;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return set(state, action.payload.id, action.payload);

    case REMOVE_FAVORITE:
      return del(state, action.payload.id);

    default:
      return state;
  }
};
