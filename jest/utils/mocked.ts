import { Category, Movie } from '../../src/store/actions/moviesActions';

export const mockedCategories: Category[] = [
  {
    id: 1,
    name: 'Category 1',
  },
  {
    id: 2,
    name: 'Category 2',
  },
];

export const mockedMovies: Movie[] = [
  {
    id: 1,
    title: 'Title',
    releaseDate: '2022-01-01',
    posterPath: '/path.png',
    voteAverage: 8.1,
    voteCount: 1234,
    backdropPath: '/path.png',
    genreIds: [],
    overview: 'Movie Overview',
    popularity: 10,
    bookmark: false,
  },
  {
    id: 2,
    title: 'Title 2',
    releaseDate: '2022-01-01',
    posterPath: '/path.png',
    voteAverage: 8.1,
    voteCount: 1234,
    backdropPath: '/path.png',
    genreIds: [],
    overview: 'Movie Overview',
    popularity: 10,
    bookmark: false,
  },
];
