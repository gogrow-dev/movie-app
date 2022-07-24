import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import {
  Category,
  getCategories,
  selectCategory,
} from '../actions/moviesActions';

export type Movie = {};

type InitialState = {
  movies: Movie[];
  categories: Category[];
  categorySelected: number | null;
};

const initialState = {
  movies: [],
  categories: [],
  categorySelected: null,
};

const moviesSlice = createSlice<
  InitialState,
  SliceCaseReducers<InitialState>,
  string
>({
  initialState,
  name: 'name',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.categories = payload.genres;
    });
    builder.addCase(selectCategory, (state, { payload }) => {
      if (state.categorySelected === payload) {
        state.categorySelected = null;
        return;
      }
      state.categorySelected = payload;
    });
  },
});

export default moviesSlice.reducer;
