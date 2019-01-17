import React, { Fragment } from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Logo from "../../Logo/Logo";
import "./SideDrawer.css";

const SideDrawer = props => {
  let attachedStyle = ["SideDrawer", "Close"];
  if (props.open) {
    attachedStyle = ["SideDrawer", "Open"];
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedStyle.join(" ")} onClick={props.closed}>
        <div className="SideDrawerLogo">
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuth={props.isAuth} />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
