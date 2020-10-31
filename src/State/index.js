import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./Notes/NotesSlice";

const rootReducer = {
   notes: noteReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
