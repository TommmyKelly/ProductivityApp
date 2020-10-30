import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
   notes: [],
};

const createNote = (state, action) => {
   const note = {
      id: state.notes.length,
      title: action.title,
      content: action.content,
   };
   const updatedArray = [...state, note];
   return updateObject(state, { notes: updatedArray });
};

const editNote = (state, action) => {
   const updatedArray = [...state];
   for (let i = 0; i < updatedArray.length; i++) {
      if (updatedArray[i].id === action.id) {
         updatedArray[i].title = action.title;
         updatedArray[i].content = action.content;
      }
   }
   return updateObject(state, { notes: updatedArray });
};

const deleteNote = (state, action) => {
   const updatedArray = state.notes.filter(note => note.id !== action.id);
   return updateObject(state, { notes: updatedArray });
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.CREATE_NOTE:
         return createNote(state, action);
      case actionTypes.EDIT_NOTE:
         return editNote(state, action);
      case actionTypes.DELETE_NOTE:
         return deleteNote(state, action);
      default:
         return state;
   }
};

export default reducer;
