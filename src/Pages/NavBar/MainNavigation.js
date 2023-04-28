import React, { useState } from 'react';
import { NavLink, } from 'react-router-dom';
import './BurgerButton.scss';

const TopNavBar = () => {
  return (

    <div className={`topnav`} id="myTopnav">
      <NavLink to='/cells' activeClassName="active">Cells</NavLink>
      <NavLink to='/rating' activeClassName="active">Rating</NavLink>
    </div>
  );
}

export default TopNavBar;