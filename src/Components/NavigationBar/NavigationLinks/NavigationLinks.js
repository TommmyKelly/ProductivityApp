import React from "react";

import classes from "./NavigationLinks.module.css";
import NavigationLink from "./NavigationLink/NavigationLink";

const NavigationLinks = () => (
   <div className={classes.Links}>
      <NavigationLink />
      <NavigationLink />
      <NavigationLink />
      <NavigationLink />
   </div>
);

export default NavigationLinks;
