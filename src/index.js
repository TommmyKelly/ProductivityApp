import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose } from "redux";

import "./index.css";
import App from "./App";
import notesReducer from "./store/reducers/notes";

const rootReducer = combineReducers({
   notes: notesReducer,
   // Any additional reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById("root")
);
