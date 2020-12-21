import React from 'react';
import { Link } from 'react-router-dom';

import './MenuLinks.scss';

function MenuLinks({ link, title }) {
  return (
    <Link to={link} className='menulink'>
      {title}
    </Link>
  );
}

export default MenuLinks;
