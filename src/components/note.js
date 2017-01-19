import React from 'react';
import ReactDOM from 'react-dom';

class Note extends React.Component {
  render() {
    const body = this.props.body;
    const id = this.props.id;
    const day = this.props.day;

    const isActiveToday = (day === id)
    
    return (
      <div className={"note " + (isActiveToday ? "active" : "")}>
        <div className="id">{ dayNumberToString(id) }</div>
        <div className="body">{ body }</div>
      </div>
    )
  }
}

const dayNumberToString = (n) => {
  switch(n) {
    case 0:
      return 'Sun';
    case 1:
      return 'Mon';
    case 2:
      return 'Tue';
    case 3:
      return 'Wed';
    case 4:
      return 'Thu';
    case 5:
      return 'Fr';
    case 6:
      return 'Sat';
  }
}

export default Note;
