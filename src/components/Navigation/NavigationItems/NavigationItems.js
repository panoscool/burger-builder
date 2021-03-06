import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const NavigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem link="/">Burger Builder</NavigationItem>
    {props.isAuth && <NavigationItem link="/orders">Orders</NavigationItem>}
    {props.isAuth ? (
      <NavigationItem link="/logout">Logout</NavigationItem>
    ) : (
      <NavigationItem link="/auth">Login</NavigationItem>
    )}
  </ul>
);

export default NavigationItems;
