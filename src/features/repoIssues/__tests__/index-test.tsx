import React from 'react';
import renderer from 'react-test-renderer';
import RepoIssues from '..';

test('renders correctly', () => {
  const tree = renderer.create(<RepoIssues />).toJSON();
  expect(tree).toMatchSnapshot();
});
