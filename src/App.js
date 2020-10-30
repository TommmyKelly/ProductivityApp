import "./App.css";
import { BrowserRouter } from "react-router-dom";

import NavigationBar from "./Components/NavigationBar/NavigationBar";
import NoteBoard from "./Containers/NoteBoard/NoteBoard";

function App() {
   return (
      <BrowserRouter>
         <NavigationBar />
         <NoteBoard />
      </BrowserRouter>
   );
}

export default App;
