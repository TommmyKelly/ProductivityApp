import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import {
   createNote as createNoteAction,
   deleteNote as deleteNoteAction,
   updateNote as updateNoteAction,
} from "../../State/Notes/NotesSlice";

export function NotesWithHooks() {
   const notes = useSelector(state => state.notes);
   const noteIds = Object.keys(notes);
   const dispatch = useDispatch();

   const createNote = note => dispatch(createNoteAction(note));
   const deleteNote = note => dispatch(deleteNoteAction(note));
   const updateNote = note => dispatch(updateNoteAction(note));

   return (
      <div>
         <h2>Notes:</h2>

         <button
            onClick={() => {
               createNote({ text: "new note" });
            }}
         >
            create note
         </button>

         {noteIds.map(noteId => {
            const note = notes[noteId];
            return (
               <div
                  key={noteId}
                  style={{ border: "1px solid #eee", margin: 10 }}
               >
                  <p>{note.text}</p>
                  <button
                     onClick={() =>
                        updateNote({
                           id: noteId,
                           text: `updated text: ${Math.random()}`,
                        })
                     }
                  >
                     update text
                  </button>
                  <br />
                  <button onClick={() => deleteNote(note)}>delete note</button>
               </div>
            );
         })}
      </div>
   );
}

class NotesExample extends Component {
   render() {
      const { notes, createNote, deleteNote, updateNote } = this.props;
      const noteIds = Object.keys(notes);
      return (
         <div>
            <h2>Notes:</h2>

            <button
               onClick={() => {
                  createNote({ text: "new note" });
               }}
            >
               create note
            </button>

            {noteIds.map(noteId => {
               const note = notes[noteId];
               return (
                  <div
                     key={noteId}
                     style={{ border: "1px solid #eee", margin: 10 }}
                  >
                     <p>{note.text}</p>
                     <button
                        onClick={() =>
                           updateNote({
                              id: noteId,
                              text: `updated text: ${Math.random()}`,
                           })
                        }
                     >
                        update text
                     </button>
                     <br />
                     <button onClick={() => deleteNote(note)}>
                        delete note
                     </button>
                  </div>
               );
            })}
         </div>
      );
   }
}

export const NotesWithClass = connect(
   state => ({ notes: state.notes }),
   dispatch => ({
      createNote: note => dispatch(createNoteAction(note)),
      deleteNote: note => dispatch(deleteNoteAction(note)),
      updateNote: note => dispatch(updateNoteAction(note)),
   })
)(NotesExample);
