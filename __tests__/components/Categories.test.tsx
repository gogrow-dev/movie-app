import 'react-native';
import React from 'react';
import * as redux from 'react-redux';
import renderer from 'react-test-renderer';
import Categories from '../../src/components/Categories';
import { mockedCategories } from '../../jest/utils/mocked';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.spyOn(redux, 'useDispatch').mockImplementation(() => jest.fn());
jest.spyOn(redux, 'useSelector').mockImplementation(() => mockedCategories);

describe('Testing MovieCard', () => {
  it('Create snapshot', async () => {
    const tree = await renderer.create(<Categories />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
