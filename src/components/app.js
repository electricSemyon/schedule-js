import React from 'react';
import ReactDOM from 'react-dom';
import NoteContainerWrapper from '../wrappers/noteContainerWrapper';
import ItemsContainerWrapper from '../wrappers/itemsContainerWrapper.js';

const App = () => {
  return (
    <div>
      <ItemsContainerWrapper/>
      <NoteContainerWrapper/>
    </div>
  )
}

export default App;
// <ItemsContainerWrapper/>