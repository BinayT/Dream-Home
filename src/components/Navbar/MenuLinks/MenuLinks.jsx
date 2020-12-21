import React from 'react';
import { Link } from 'react-router-dom';

function MenuLinks({ title, link }) {
  return (
    <Link to={link} className='menulink'>
      {title}
    </Link>
  );
}

export default MenuLinks;
