import React, {useState} from 'react';
import {connect} from 'react-redux';

import Aux from '../Aux/Aux';
import Tollbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

const Layout = props => {
  const [sideDrawIsVisible, setSideDrawIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawIsVisible(false);
  }

  const sideDrawerToogleHandler = () => {
    setSideDrawIsVisible(!sideDrawIsVisible);
  }

  return (
    <Aux>
      <Tollbar
        isAuth={props.isAuthenticated}
        drawerToogleClicked={sideDrawerToogleHandler} />
      <SideDrawer
        isAuth={props.isAuthenticated}
        open={sideDrawIsVisible}
        closed={sideDrawerClosedHandler} />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);