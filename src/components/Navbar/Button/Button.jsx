import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

function Button({ link, children }) {
  return (
    <Link to={link} className='button'>
      {children}
    </Link>
  );
}

export default Button;
