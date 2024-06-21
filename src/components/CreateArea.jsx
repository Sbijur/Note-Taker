import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
function CreateArea(props) {
  const [isExpanded,setEx]=useState(false);

  const [note,setNote]=useState({
    title:"",
    content:""
  });

  function handleChange(event)
  {
    const {name,value}=event.target;
    setNote(prevNote=>{
      return{
        ...prevNote,
        [name]:value
      };
    })
  }

  function submitNote(event)
  {
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    });
    event.preventDefault();

  }
  function expand()
  {
    setEx(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"/>

        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded?3:1}
        />
        
        <Fab onClick={submitNote}><AddIcon/></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
