import { combineReducers } from 'redux';
import favorites from './favorites/reducer';
import theme from './theme/reducer';

export default combineReducers({
  favorites,
  theme,
});
