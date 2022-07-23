import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';

export type Movie = {};

type InitialState = {
  movies: Movie[];
};

const initialState = {
  movies: [],
};

const moviesSlice = createSlice<
  InitialState,
  SliceCaseReducers<InitialState>,
  string
>({
  initialState,
  name: 'name',
  reducers: {},
});

export default moviesSlice.reducer;
