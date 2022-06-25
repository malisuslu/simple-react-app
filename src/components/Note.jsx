import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {

  function remove(e) {
    e.preventDefault();
    props.onDelete(e.target.id || e.target.parentNode.id || e.target.parentNode.parentNode.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button id={props.id} onClick={remove}>
        <DeleteIcon className="delete-icon" />
      </button>
    </div>
  );
}

export default Note;