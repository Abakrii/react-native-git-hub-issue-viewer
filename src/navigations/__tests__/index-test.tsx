import React from 'react';
import renderer from 'react-test-renderer';
import NavigationStack from '..';

test('renders correctly', () => {
  const tree = renderer.create(<NavigationStack />).toJSON();
  expect(tree).toMatchSnapshot();
});
