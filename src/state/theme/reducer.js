import { CHANGE_THEME, TOGGLE_THEME } from './types';

export const initialState = 'light';

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;

    case TOGGLE_THEME:
      return state === 'light' ? 'dark' : 'light';

    default:
      return state;
  }
};
