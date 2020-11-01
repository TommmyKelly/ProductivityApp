import React from "react";
import PropTypes from "prop-types";

import classes from "./SureModal.module.css";
import Modal from "../Modal";

const SureModal = props => (
   <Modal
      clicked={props.onNo}
      show
      style={{ backgroundColor: "var(--color-primary-light)" }}
   >
      <div className={classes.SureModal}>
         <h4 className={classes.SureText}>{props.warningText}</h4>
         <div className={classes.ButtonsWrapper}>
            <button className={classes.NoButton} onClick={props.onNo}>
               No
            </button>
            <button className={classes.YesButton} onClick={props.onYes}>
               Yes
            </button>
         </div>
      </div>
   </Modal>
);

SureModal.propTypes = {
   onNo: PropTypes.func,
   onYes: PropTypes.func,
   warningText: PropTypes.string,
};

export default SureModal;
