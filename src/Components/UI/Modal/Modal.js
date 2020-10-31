import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import PropTypes from "prop-types";

import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const Modal = props => (
   <React.Fragment>
      <Backdrop show={props.show} clicked={props.clicked} />
      <CSSTransition
         mountOnEnter
         unmountOnExit
         in={props.show}
         timeout={300}
         classNames="grow"
      >
         <div className={classes.Modal} style={props.style}>
            <div className={classes.CloseButtonWrapper} onClick={props.clicked}>
               <button
                  onClick={props.clicked}
                  className={classes.CloseButton}
               ></button>
            </div>
            {props.children}
         </div>
      </CSSTransition>
   </React.Fragment>
);

Modal.propTypes = {
   show: PropTypes.bool,
   clicked: PropTypes.func,
   style: PropTypes.object,
};

export default Modal;
