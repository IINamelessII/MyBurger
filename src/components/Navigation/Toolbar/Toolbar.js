import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToogle from '../SideDrawer/DrawerToogle/DrawerToogle';
import classes from './Toolbar.css';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToogle clicked={props.drawerToogleClicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>    
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;