import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
  </div>
);


export default NavBar;