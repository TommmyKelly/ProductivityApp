import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

// If already familiar with redux, redux-toolkit speeds up the development proccess
// https://redux-toolkit.js.org/api/createSlice

/**
* NOTES STATE EXAMPLE
{
  "838748c7-b06c-4e07-9f8d-85f22986d1db": {
    id: "838748c7-b06c-4e07-9f8d-85f22986d1db",
    text: "Some String"
  }
}
*/

const initialState = [
   {
      id: 1,
      title: "Cool idea",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Unde praesentium illum rem quia odit, sed
          ipsum voluptates laboriosam voluptatem, illo 
         dignissimos quo repellat rerum quibusdam 
         voluptas nihil numquam facilis earum.`,
      position: {
         x: 0,
         y: 0,
      },
   },
   {
      id: 2,
      title: "What if",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Unde praesentium illum rem quia odit, sed
          ipsum voluptates laboriosam voluptatem, illo 
         dignissimos quo repellat`,
      position: {
         x: 0,
         y: 0,
      },
   },
];

const notesSlice = createSlice({
   name: "notes",
   initialState,
   reducers: {
      createNote(state, action) {
         const newNoteId = uuid();
         const note = action.payload;
         state[newNoteId] = { ...note, id: newNoteId };
      },
      deleteNote(state, action) {
         const note = action.payload;
         let index = state.indexOf(note);
         index -= 1;
         state.splice(index, 1);
      },
      updateNote(state, action) {
         const note = action.payload;
         for (let i = 0; i < state.length; i++) {
            if (state[i].id === note.id) {
               state[i] = { ...note };
            }
         }
      },
      updateNotePosition(state, action) {
         const note = action.payload;
         for (let i = 0; i < state.length; i++) {
            if (state[i].id === note.id) {
               state[i].position = note.position;
            }
         }
      },
   },
});

export const {
   createNote,
   deleteNote,
   updateNote,
   updateNotePosition,
} = notesSlice.actions;
export default notesSlice.reducer;
