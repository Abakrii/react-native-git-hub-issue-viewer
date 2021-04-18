import React from 'react';
import renderer from 'react-test-renderer';
import IssueItem from '../';

const items = {
  id: 112,
  title: 'render title',
  number: 1,
  body: 'render body',
};
test('renders correctly', () => {
  const tree = renderer.create(<IssueItem {...items} />).toJSON();
  expect(tree).toMatchSnapshot();
});
