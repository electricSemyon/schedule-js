import React from 'react';
import renderer from 'react-test-renderer';

import Note from '../../src/components/note.js'

test('renders note div', () => {
  const component = renderer.create(
    <Note body="Test note" id="1" day="1" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})
