import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '..';
import type { Category } from '../actions/moviesActions';

type Selector<S> = (state: RootState) => S;
export const categorySelector = (categoryIds: number[]): Selector<Category[]> =>
  createSelector(
    (state: RootState) => state.movies.categories,
    categories => {
      const movieCategories: Category[] = [];
      categoryIds.forEach(id => {
        const category = categories.find(cat => cat.id === id);
        if (category) {
          movieCategories.push(category);
        }
      });
      return movieCategories;
    },
  );

export const addedToWatchSelector = (id: number): Selector<boolean> =>
  createSelector(
    (state: RootState) => state.movies.watchList,
    watchList => {
      const watch = watchList.find(movie => movie.id === id);
      return Boolean(watch);
    },
  );
