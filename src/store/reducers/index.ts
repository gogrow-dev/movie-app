import { combineReducers } from '@reduxjs/toolkit';

import movies from './moviesReducer';

const rootReducers = combineReducers({
  movies,
});

export default rootReducers;
