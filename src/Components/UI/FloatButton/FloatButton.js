import React from "react";
import PropTypes from "prop-types";

import classes from "./FloatButton.module.css";

const FloatButton = props => {
   let color;
   switch (props.color) {
      case "Yellow":
         color = classes.Yellow;
         break;
      case "Blue":
         color = classes.Blue;
         break;
      default:
         color = "Yellow";
   }

   const classList = [classes.Button, color, props.additionalClass].join(" ");

   return (
      <div className={classList}>
         <div className={classes.Plus}></div>
      </div>
   );
};

FloatButton.propTypes = {
   clicked: PropTypes.func,
   color: PropTypes.oneOf(["Yellow", "Blue"]),
   additionalClass: PropTypes.string,
};

FloatButton.defaultProps = {
   color: "Yellow",
};

export default FloatButton;
