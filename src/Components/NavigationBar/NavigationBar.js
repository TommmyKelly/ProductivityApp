import React from "react";

import classes from "./NavigationBar.module.css";
import Logo from "./Logo/Logo";
import NavigationLinks from "./NavigationLinks/NavigationLinks";

const NavigationBar = () => (
   <div className={classes.Navigation}>
      <Logo />
      <NavigationLinks />
   </div>
);

export default NavigationBar;
