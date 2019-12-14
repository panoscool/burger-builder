import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import './Layout.css';

function Layout(props) {
  const { token } = useSelector((state) => state.auth);

  const [showSideDrawer, setSideDrawer] = useState(false);

  const sideDrawerToggleHandler = () => {
    setSideDrawer(!showSideDrawer)
  };

  return (
    <Fragment>
      <Toolbar
        drawerToggleClicked={sideDrawerToggleHandler}
        isAuth={token}
      />
      <SideDrawer
        open={showSideDrawer}
        closed={sideDrawerToggleHandler}
        isAuth={token}
      />
      <main className="Content">{props.children}</main>
    </Fragment>
  );
}

export default Layout;
