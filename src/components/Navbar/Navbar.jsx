import React from 'react';
import { Link } from 'react-router-dom';

import { menuData } from '../../data/MenuData';
import MenuLinks from './MenuLinks/MenuLinks';
import './Navbar.scss';

function Navbar() {
  return (
    <nav>
      <Link className='logo'>LOGO</Link>
      <i />
      <div className='nav__menu'>
        {menuData.map((el, i) => (
          <MenuLinks key={i} items={el} />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
