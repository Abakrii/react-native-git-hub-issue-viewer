import React from 'react';
import renderer from 'react-test-renderer';
import RepoSearch from '../';

test('renders correctly', () => {
  const tree = renderer.create(<RepoSearch />).toJSON();
  expect(tree).toMatchSnapshot();
});
