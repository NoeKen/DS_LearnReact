import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar' >
      <ul>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/">Home</Link></li>
     	</ul>
      <hr />
    </div>
  );
};

export default NavBar;