import React from 'react';
import ReactDOM from 'react-dom';

import Note from './note.js'

class NotesContainer extends React.Component {
  render() {
    const todayIndex = this.props.day;
    const notes = this.props.notes.length > 0 ? 
                  this.props.notes.map(el => 
                    <Note 
                      body={el.body} 
                      id={el.id} 
                      key={el.id}
                      day={todayIndex}
                    />) : '';

    return (
      <div className="shedule">
        { notes }
      </div>
    )
  }
}

export default NotesContainer;
