import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import camelCaseObject from 'camelcase-object-deep';
import axios, { ACCOUNT_ID } from '../../api/';

export type Movie = {
  id: number;
  title: string;
  releaseDate: string;
  posterPath: string;
  voteAverage: number;
  voteCount: number;
  backdropPath: string;
  genreIds: number[];
  overview: string;
  popularity: number;
  bookmark?: boolean;
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

export const addToWatchList = createAsyncThunk<MovieResponse, number>(
  'movies/addToWatchList',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/account/${ACCOUNT_ID}/watchlist`, {
        media_type: 'movie',
        media_id: id,
        watchlist: true,
      });
      return response.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err);
      }
    }
  },
);

export const getWatchList = createAsyncThunk<MovieResponse>(
  'movies/getWatchList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/account/${ACCOUNT_ID}/watchlist/movies`,
      );
      return camelCaseObject(response.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err);
      }
    }
  },
);

export const selectCategory = createAction<number>('movies/selectCategory');
