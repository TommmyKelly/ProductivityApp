import React, { useState } from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import { useDispatch } from "react-redux";
import {
   deleteNote as deleteNoteAction,
   updateNote as updateNoteAction,
} from "../../../State/Notes/NotesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import NoteForm from "../NoteForm/NoteForm";
import CloseButton from "../../UI/CloseButton/CloseButton";
import classes from "./Note.module.css";
import SureModal from "../../UI/Modal/SureModal/SureModal";

// NOTE:
// The state will be used to save the data so don't delete!!

const Note = props => {
   // const [position, setPosition] = useState({ x: 0, y: 0 });
   const [showForm, setShowForm] = useState(false);
   const [sureModalIsOpen, setSureModalIsOpen] = useState(false);

   const dispatch = useDispatch();

   const deleteNote = note => dispatch(deleteNoteAction(note));
   const updateNote = note => dispatch(updateNoteAction(note));

   let title = props.note.title.slice(0, 13);
   if (title.length === 13) {
      title += "...";
   }
   let content = props.note.content.slice(0, 190); // This is just a fit number that I found
   if (content.length === 190) {
      content += "...";
   }

   // const onDragStop = event => {
   //    setPosition({ x: event.x, y: event.y });
   // };

   const onSubmitHandler = note => {
      updateNote({ ...note });
   };

   const onDeleteHandler = () => {
      setSureModalIsOpen(true);
   };

   const onNoHandler = () => {
      setSureModalIsOpen(false);
   };

   const onYesHandler = () => {
      setSureModalIsOpen(false);
      deleteNote({ ...props.note });
   };

   return (
      <React.Fragment>
         <Draggable bounds="parent" /*onStop={onDragStop}*/>
            <div
               className={classes.Note}
               onDoubleClick={() => setShowForm(true)}
            >
               <CloseButton onClick={onDeleteHandler}>
                  <FontAwesomeIcon
                     icon={faTrash}
                     className={classes.SaveIcon}
                  />
               </CloseButton>
               <h3 className={classes.Title}>{title}</h3>
               <ReactMarkdown
                  plugins={[gfm]}
                  children={content}
                  className={classes.Content}
               />
            </div>
         </Draggable>
         {showForm && (
            <NoteForm
               initialNote={props.note}
               closeModal={() => setShowForm(false)}
               onSubmit={onSubmitHandler}
            />
         )}
         {sureModalIsOpen && (
            <SureModal
               onNo={onNoHandler}
               onYes={onYesHandler}
               warningText="Are you sure you want to delete this note?"
            />
         )}
      </React.Fragment>
   );
};

Note.propTypes = {
   note: PropTypes.object,
};

export default Note;
