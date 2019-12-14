import React from 'react';
import logo from '../../assets/images/burger-logo.png';
import './Logo.css';

const Logo = (props) => (
  <div className="Logo">
    <img src={logo} alt="MyBurger" style={{ height: props.height }} />
  </div>
);

export default Logo;
