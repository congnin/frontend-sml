import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.scss';

export function NavItem(props) {
  const { link, text, icon, active } = props;

  return (
    <li className={`${active ? `side-nav--active` : ''}`}>
      <Link to={link}>
        <svg>
          <use href={icon}></use>
        </svg>
        {text}
      </Link>
    </li>
  );
}
