import React, { useState } from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";

import classes from "./Note.module.css";

// NOTE:
// The state will be used to save the data so don't delete!!

const Note = props => {
   // const [position, setPosition] = useState({ x: 0, y: 0 });

   let title = props.title.slice(0, 13);
   title += "...";
   let content = props.content.slice(0, 190); // This is just a fit number that I found
   content += "...";

   // const onDragStop = event => {
   //    setPosition({ x: event.x, y: event.y });
   // };

   return (
      <Draggable bounds="parent" /*onStop={onDragStop}*/>
         <div className={classes.Note}>
            <h3 className={classes.Title}>{title}</h3>
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
