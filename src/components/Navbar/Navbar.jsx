import React from 'react';
import { Link } from 'react-router-dom';

import { menuData } from '../../data/MenuData';
import Button from './Button/Button';
import MenuLinks from './MenuLinks/MenuLinks';
import './Navbar.scss';

function Navbar() {
  return (
    <nav>
      <Link className='logo' to='/'>
        LOGO
      </Link>
      <i className='nav__bars'></i>
      <div className='nav__menu'>
        {menuData.map(({ link, title }, i) => (
          <MenuLinks key={i} link={link} title={title} />
        ))}
      </div>
      <div className='nav__button'>
        <Button link='/contacts'>Contact Us</Button>
      </div>
    </nav>
  );
}

export default Navbar;
