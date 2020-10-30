import * as actionTypes from "./actionTypes";

export const createNote = (title, content) => {
   return {
      type: actionTypes.CREATE_NOTE,
      title,
      content,
   };
};

export const editNote = (id, title, content) => {
   return {
      type: actionTypes.EDIT_NOTE,
      id,
      title,
      content,
   };
};

export const deleteNote = id => {
   return {
      type: actionTypes.DELETE_NOTE,
      id,
   };
};
