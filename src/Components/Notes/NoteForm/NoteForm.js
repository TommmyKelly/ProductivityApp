import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

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

   const onSubmitHandler = event => {
      event.preventDefault();
      props.closeModal();
      props.onSubmit(note);
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
         clicked={props.closeModal}
      >
         <form className={classes.Form}>
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
                  <button
                     type="button"
                     className={classes.Button}
                     onClick={saveContent}
                  >
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
                  <button
                     type="button"
                     className={classes.Button}
                     onClick={editContent}
                  >
                     Edit
                  </button>
               </React.Fragment>
            )}
            <button
               type="submit"
               className={classes.SaveButton}
               onClick={onSubmitHandler}
            >
               <FontAwesomeIcon icon={faSave} className={classes.SaveIcon} />
            </button>
         </form>
      </Modal>
   );
};

NoteForm.propTypes = {
   initialNote: PropTypes.object,
   onChange: PropTypes.func,
   onSubmit: PropTypes.func,
   closeModal: PropTypes.func,
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
