import React from 'react';
import { Link } from 'react-router-dom';
import { BiRightArrow } from 'react-icons/bi';

import './Slide.scss';

function Slide({ items }) {
  return (
    <div className='slide'>
      <div className='slide__slider'>
        <img src={items.image} alt={items.alt} className='slide__image' />
        <div className='slide__content'>
          <h1>{items.title}</h1>
          <p>{items.price}</p>
          <Link
            to={items.path}
            className='button'
            style={{ maxWidth: '160px' }}
          >
            {items.label}
            <BiRightArrow />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slide;
