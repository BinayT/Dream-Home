import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

import './Dropdown.scss';
import { menuData } from '../../data/MenuData';

function Dropdown({ toggle, isOpen }) {
  console.log(isOpen);
  console.log(toggle);
  return (
    <div
      className='dropdown'
      style={{ opacity: isOpen ? '1' : '0', top: isOpen ? '0' : '-100%' }}
      isOpen={isOpen}
      onClick={toggle}
    >
      <div className='dropdown__icon' onClick={toggle}>
        <AiOutlineClose className='dropdown__iconClose' />
      </div>
      <div>
        <div className='dropdown__menu'>
          {menuData.map((el, i) => (
            <Link to={el.link} key={i} className='dropdown__link'>
              {el.title}
            </Link>
          ))}
        </div>
        <div className='dropdown__button'>
          <Link to='/contact'>Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
