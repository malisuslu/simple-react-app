import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateNote(props) {
  const [isFocused, setIsFocused] = React.useState(false);

  function createNote(e) {
    e.preventDefault();
    let title = e.target.closest('form').querySelector('input');
    let content = e.target.closest('form').querySelector('textarea');
    console.log(title.value, content.value);
    let note = { title: title.value, content: content.value }
    props.onAdd(note); 
    title.value = "";
    content.value = "";
  }
  
  onclick = (e) => {
    if (e.target.closest('form')) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  }

  return (
      <form className="form">
        <input name="title" placeholder="Title" />
        {isFocused && <textarea name="content" placeholder="Take a note..." rows="1"/>}
        <Zoom in={isFocused}> 
          <Fab onClick={createNote} className="add-button"><AddIcon/></Fab>
        </Zoom>
      </form>
  );
}

export default CreateNote;