import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import {
  Category,
  getCategories,
  getMovies,
  type Movie,
  selectCategory,
  getWatchList,
} from '../actions/moviesActions';

type InitialState = {
  movies: Movie[];
  categories: Category[];
  categorySelected: number | null;
  watchList: Movie[];
};

const defaultCategories: Category[] = [
  { id: -1, name: 'Popular' },
  { id: -2, name: 'Top Rated' },
];

const initialState = {
  movies: [],
  categories: defaultCategories,
  categorySelected: -1,
  watchList: [],
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
      state.categories = [...defaultCategories, ...payload.genres];
    });
    builder.addCase(selectCategory, (state, { payload }) => {
      if (state.categorySelected === payload) {
        state.categorySelected = null;
        return;
      }
      state.categorySelected = payload;
    });
    builder.addCase(getMovies.fulfilled, (state, { payload }) => {
      state.movies = payload.results;
    });
    builder.addCase(getWatchList.fulfilled, (state, { payload }) => {
      state.watchList = payload.results;
      state.movies = state.movies.map(movie => {
        const bookmark = state.watchList.find(watch => watch.id === movie.id);
        return {
          ...movie,
          bookmark: Boolean(bookmark),
        };
      });
    });
  },
});

export default moviesSlice.reducer;
