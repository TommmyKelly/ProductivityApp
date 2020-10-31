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

const initialState = {};

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
         const deletingNoteId = note.id;
         delete state[deletingNoteId];
      },
      updateNote(state, action) {
         const note = action.payload;
         state[note.id] = { ...note };
      },
   },
});

export const { createNote, deleteNote, updateNote } = notesSlice.actions;
export default notesSlice.reducer;
