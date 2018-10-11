import { CHANGE_THEME, TOGGLE_THEME } from './types';

export const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  payload: theme,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});
