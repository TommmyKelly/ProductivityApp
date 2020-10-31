import React from "react";

import classes from "./NoteBoard.module.css";
import Note from "../../Components/Notes/Note/Note";
import FloatButton from "../../Components/UI/FloatButton/FloatButton";

class NoteBoard extends React.Component {
   render() {
      return (
         <div className={classes.NoteBoard}>
            <Note
               note={{
                  title: "SomethingSomething",
                  content:
                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in massa.",
               }}
            />
            <FloatButton additionalClass={classes.Button} />
         </div>
      );
   }
}

export default NoteBoard;
