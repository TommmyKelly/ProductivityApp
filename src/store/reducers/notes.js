import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
   notes: [],
};

const createNote = (state, action) => {
   return state;
};

const editNote = (state, action) => {
   return state;
};

const deleteNote = (state, action) => {
   return state;
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
