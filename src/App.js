import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./State";

import NavigationBar from "./Components/NavigationBar/NavigationBar";
import NoteBoard from "./Containers/NoteBoard/NoteBoard";
import NoteForm from "./Components/Notes/NoteForm/NoteForm";

function App() {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <NavigationBar />
            <NoteBoard />
            <NoteForm />
         </BrowserRouter>
      </Provider>
   );
}

export default App;
