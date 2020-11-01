import React from "react";
import { connect } from "react-redux";

import classes from "./NoteBoard.module.css";
import Note from "../../Components/Notes/Note/Note";
import FloatButton from "../../Components/UI/FloatButton/FloatButton";

class NoteBoard extends React.Component {
   render() {
      const { notes } = this.props;

      return (
         <div className={classes.NoteBoard}>
            {notes.map(note => (
               <Note note={note} key={note.id} />
            ))}
            <FloatButton additionalClass={classes.Button} />
         </div>
      );
   }
}

const NotesWithClass = connect(state => ({ notes: state.notes }))(NoteBoard);

export default NotesWithClass;
