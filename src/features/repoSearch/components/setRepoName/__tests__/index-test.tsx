import React from 'react';
import renderer from 'react-test-renderer';
import SetRepoName from '../';

test('renders correctly', () => {
  const tree = renderer.create(<SetRepoName />).toJSON();
  expect(tree).toMatchSnapshot();
});
