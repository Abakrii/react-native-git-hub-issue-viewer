import React from 'react';
import renderer from 'react-test-renderer';
import GetRepoIssue from '../';

test('renders correctly', () => {
  const tree = renderer.create(<GetRepoIssue />).toJSON();
  expect(tree).toMatchSnapshot();
});
