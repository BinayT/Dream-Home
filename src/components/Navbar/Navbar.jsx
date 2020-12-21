import React from 'react';
import { Link } from 'react-router-dom';
import { RiMenu4Line } from 'react-icons/ri';

import { menuData } from '../../data/MenuData';
import Button from './Button/Button';
import MenuLinks from './MenuLinks/MenuLinks';
import './Navbar.scss';

function Navbar() {
  return (
    <nav>
      <Link className='nav__logo' to='/'>
        LOGO
      </Link>
      <RiMenu4Line className='nav__burgerMenu' />
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
