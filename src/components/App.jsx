import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes,setNotes]=useState([]);

  function addNote(n)
  {
    setNotes(prevNotes=>{
      return [...prevNotes,n];
    });
  }

  function deleteNote(id)
  {
    setNotes(prevNotes=>{
      return prevNotes.filter((n,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <div>
      <CreateArea
      onAdd={addNote}/>

      {notes.map((n,index)=>{
        return <Note key={index} id={index} title={n.title} content={n.content} onDelete={deleteNote} />;
      })}
    </div>
  );
}

export default App;
