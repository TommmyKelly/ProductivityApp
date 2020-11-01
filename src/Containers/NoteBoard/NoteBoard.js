import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { createNote as createNoteAction } from "../../State/Notes/NotesSlice";

import classes from "./NoteBoard.module.css";
import Note from "../../Components/Notes/Note/Note";
import FloatButton from "../../Components/UI/FloatButton/FloatButton";
import NoteForm from "../../Components/Notes/NoteForm/NoteForm";

const NoteBoard = () => {
   const [showForm, setShowForm] = useState(false);
   const notes = useSelector(state => state.notes);
   const dispatch = useDispatch();

   const createNote = note => dispatch(createNoteAction(note));

   const onSubmitHandler = note => {
      setShowForm(false);
      createNote({ ...note });
   };

   return (
      <div className={classes.NoteBoard}>
         {notes.map(note => (
            <Note note={note} key={note.id} />
         ))}
         <FloatButton
            additionalClass={classes.Button}
            onClick={() => setShowForm(true)}
         />
         {showForm && (
            <NoteForm
               startInEdit
               onSubmit={onSubmitHandler}
               closeModal={() => setShowForm(false)}
            />
         )}
      </div>
   );
};

export default NoteBoard;
