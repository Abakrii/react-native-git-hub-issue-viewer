import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '../';

let totalIssues = 100;
let issuesPerPage = 10;

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Pagination totalIssues={totalIssues} issuesPerPage={issuesPerPage} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
