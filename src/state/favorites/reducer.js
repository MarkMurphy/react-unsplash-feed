import { ADD_FAVORITE, REMOVE_FAVORITE } from './types';

export const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      // return [...state, action.payload];
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    case REMOVE_FAVORITE:
      // return state.filter((item) => item.id !== action.payload.id);
      const { [action.payload.id]: _, ...newState } = state;

      return newState;

    default:
      return state;
  }
};
