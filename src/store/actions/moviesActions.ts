import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import axios from '../../api/';

export const getMovies = createAsyncThunk('movies/getMovies', () => {});

export type Category = {
  id: number;
  name: string;
};

type CategoriesResponse = {
  genres: Category[];
};

export const getCategories = createAsyncThunk<CategoriesResponse>(
  'movies/getCategories',
  async () => {
    try {
      const response = await axios.get('/genre/movie/list');
      return response.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return err;
      }
    }
  },
);

export const selectCategory = createAction<number>('movies/selectCategory');
