import React from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";

import classes from "./Note.module.css";

const Note = props => {
   let content = props.content.slice(0, 175);
   content += "...";

   return (
      <Draggable bounds="parent">
         <div className={classes.Note}>
            <h3 className={classes.Title}>{props.title}</h3>
            <p className={classes.Content}>{content}</p>
         </div>
      </Draggable>
   );
};

Note.propTypes = {
   title: PropTypes.string,
   content: PropTypes.string,
};

export default Note;
