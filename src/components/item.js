import React from 'react';

const item = ({body, id, onDelete}) => {
  return (
    <div>
      <span>{body}</span>
      <a href="#" onClick={() => onDelete(id)}>Delete</a>
    </div>
  )
}

export default item;