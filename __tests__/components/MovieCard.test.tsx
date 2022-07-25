import 'react-native';
import React from 'react';
import MovieCard from '../../src/components/MovieCard';
import renderer from 'react-test-renderer';
import { mockedMovies } from '../../jest/utils/mocked';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

describe('Testing MovieCard', () => {
  it('Create snapshot', () => {
    const tree = renderer.create(<MovieCard item={mockedMovies[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
