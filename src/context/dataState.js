import dataContext from "./dataContext"
import { useState } from "react";

const dataState = () => {
  
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);

    //get all notes
    const getNotes = async () =>{
      
      const json = await response.json() // yeh pased kregi json ko
      console.log(json)
      setNotes(json)
    }

      //const addNote 
      const addNote = async (title, description, tag) =>{
        //TODO: API call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
            // 'Example:auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzNjI3ODk1ODkwZTUyMjA0Zjc1YjZiIn0sImlhdCI6MTYzMDk0NTU4Nn0.kAbdtm5jv4o_MRcEZpF-FP0LLShtgOhNPaTDpWQjEtk'
          },
          body: JSON.stringify({title, description, tag}) //yeh hum body me bhej rhe hai
        });
        const note= await response.json();
        
        setNotes(notes.concat(note))
        //concat return an array where as push updates an array
      }



    return (
        // jo bhi chz hum provide krni hai ushe value me daaldo or tum context provider ka syntax use kro
        //uske ander jb bhi kuch wrap kroge uske bich me automatically saare children aajayenge.. App.js check kro
        //Example: About.js// <NoteContext.Provider value={{state, update}}>
        
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default dataState;
