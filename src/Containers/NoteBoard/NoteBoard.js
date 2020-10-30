import React from "react";

import classes from "./NoteBoard.module.css";
import Note from "../../Components/Notes/Note/Note";

class NoteBoard extends React.Component {
   render() {
      return (
         <div className={classes.NoteBoard}>
            <Note
               title="Something"
               content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in massa."
            />
         </div>
      );
   }
}

export default NoteBoard;
