import React from 'react';
import renderer from 'react-test-renderer';

import NotesContainer from '../../src/components/noteContainer.js'

import Fixture from '../fixtures/localStorageFixture.json'

test('renders notes from "notes" prop', () => {
  const notes = Fixture.data;
  const day = 1;

  const component = renderer.create(
    <NotesContainer notes={notes}
          day={day}/>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})
