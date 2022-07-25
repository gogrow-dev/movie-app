import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import camelCaseObject from 'camelcase-object-deep';
import axios from '../../api/';

export type Movie = {
  title: string;
  releaseDate: string;
  posterPath: string;
  voteAverage: number;
  voteCount: number;
  backdropPath: string;
  genreIds: number[];
  overview: string;
  popularity: number;
};

export type MovieResponse = {
  page: number;
  totalResults: number;
  totalPages: number;
  results: Movie[];
};

export type Category = {
  id: number;
  name: string;
};

type CategoriesResponse = {
  genres: Category[];
};

export const getMovies = createAsyncThunk<MovieResponse, number | null>(
  'movies/getMovies',
  async (categorySelected, { rejectWithValue }) => {
    try {
      if (categorySelected === -1) {
        const response = await axios.get('/movie/popular');
        return camelCaseObject(response.data);
      }
      if (categorySelected === -2) {
        const response = await axios.get('/movie/top_rated');
        return camelCaseObject(response.data);
      }

      const response = await axios.get('/movie/popular', {
        params: {
          with_genres: categorySelected,
        },
      });
      return camelCaseObject(response.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err);
      }
    }
  },
);

export const getCategories = createAsyncThunk<CategoriesResponse>(
  'movies/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/genre/movie/list');
      return response.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err);
      }
    }
  },
);

export const selectCategory = createAction<number>('movies/selectCategory');
