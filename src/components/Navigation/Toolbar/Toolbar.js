import React from "react";
import { Link } from "react-router-dom";

import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../Logo/Logo";
import "./Toolbar.css";

const Toolbar = props => (
  <header className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className="ToolbarLogo">
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <nav className="DesktopOnly">
      <NavigationItems isAuth={props.isAuth} />
    </nav>
  </header>
);

export default Toolbar;
