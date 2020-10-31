import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import classes from "./NoteForm.module.css";
import Modal from "../../UI/Modal/Modal";

const NoteForm = props => {
   const [note, setNote] = useState(props.initialNote);
   const [isEditing, setIsEditing] = useState(false);

   const onTitleChangedHandler = event => {
      const newNote = { ...note };
      newNote.title = event.target.value;
      setNote(newNote);
      props.onChange(newNote);
   };

   const onContentChangedHandler = event => {
      const newNote = { ...note };
      newNote.content = event.target.value;
      setNote(newNote);
      props.onChange(newNote);
   };

   const saveContent = () => {
      setIsEditing(false);
   };

   const editContent = () => {
      setIsEditing(true);
   };

   return (
      <Modal
         style={{
            backgroundColor: "var(--color-primary-light)",
            border: "solid 2px var(--color-primary)",
         }}
         show
      >
         <div className={classes.Form}>
            <input
               type="text"
               className={classes.Title}
               value={note.title}
               onChange={onTitleChangedHandler}
               placeholder="Title"
            />
            {isEditing ? (
               <React.Fragment>
                  <textarea
                     className={classes.Content}
                     value={note.content}
                     onChange={onContentChangedHandler}
                     placeholder="Content"
                  />
                  <button className={classes.Button} onClick={saveContent}>
                     Save
                  </button>
               </React.Fragment>
            ) : (
               <React.Fragment>
                  <ReactMarkdown
                     plugins={[gfm]}
                     children={note.content}
                     className={classes.Content}
                  />
                  <button className={classes.Button} onClick={editContent}>
                     Edit
                  </button>
               </React.Fragment>
            )}
         </div>
      </Modal>
   );
};

NoteForm.propTypes = {
   initialNote: PropTypes.object,
   onChange: PropTypes.func,
   onSubmit: PropTypes.func,
};

NoteForm.defaultProps = {
   initialNote: {
      title: "",
      content: "",
   },
   onChange: newNote => {},
   onSubmit: newNote => {},
};

export default NoteForm;
