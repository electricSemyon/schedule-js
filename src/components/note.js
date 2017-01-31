import React from 'react';
import ReactDOM from 'react-dom';

const Note = ({ body, id }) => {
  const day = new Date().getDay();
  const isActiveToday = (day === id)
  const className = "note " + (isActiveToday ? "active" : "");

  return (
    <div className={className}>
      <div className="id">{ dayNumberToString(id) }</div>
      <div className="body">{ body }</div>
    </div>
  )
}

const dayNumberToString = (n) => {
  return ['Sun','Mon','Tue','Wed','Thu','Fr','Sat'][n];
}

export default Note;
