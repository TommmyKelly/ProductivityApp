import React from "react";
import PropTypes from "prop-types";

import classes from "./CloseButton.module.css";

const CloseButton = props => (
   <div
      style={props.position}
      className={classes.CloseButtonWrapper}
      onClick={props.onClick}
   >
      <button
         onClick={props.onClick}
         className={[
            !props.children && classes.CloseButtonIcon,
            classes.CloseButton,
         ].join(" ")}
      >
         {props.children}
      </button>
   </div>
);

CloseButton.propTypes = {
   onClick: PropTypes.func,
   position: PropTypes.object,
};

CloseButton.defaultProps = {
   position: {},
};

export default CloseButton;
