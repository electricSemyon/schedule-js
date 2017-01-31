import React from 'react';
import ReactDOM from 'react-dom';

import Note from './note.js'

const NotesContainer = ({ schedule, day}) => {
  return (
    <div className="shedule">
      { 
        schedule.map(el => 
          <Note 
            body={el.body} id={el.id}  key={el.id}
          />)
      }
    </div>
  )
}

export default NotesContainer;
