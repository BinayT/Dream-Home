import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

import './Dropdown.scss';
import { menuData } from '../../data/MenuData';

function Dropdown() {
  return (
    <div className='dropdown'>
      <div className='dropdown__icon'>
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
