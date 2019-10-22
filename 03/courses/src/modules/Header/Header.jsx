import React from 'react';
import classes from './Header.module.css';


const Header = () => (
  <header className={classes.header}>
    <img width="50" height="50" src={require('./../../img/megaphone.svg')} alt="logo" />
  </header>
);

export default Header;