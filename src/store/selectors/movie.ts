import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '..';
import type { Category } from '../actions/moviesActions';

type CategorySelector<S> = (state: RootState) => S;
export const categorySelector = (
  categoryIds: number[],
): CategorySelector<Category[]> =>
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
