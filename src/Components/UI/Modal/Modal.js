import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import PropTypes from "prop-types";

import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

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
         <div className="Modal" style={props.style}>
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
