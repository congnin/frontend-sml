import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Navigation.scss';
import { useLocation } from 'react-router-dom';
import NavItem from '../NavItem';

Navigation.propTypes = {};

function Navigation(props) {
  const [activeLink, setLinkActive] = useState(null);
  let location = useLocation();

  const rootPaths = ['/popular', '/upcoming', '/favorites', '/search'];
  const rootShortTitles = ['Popular', 'Upcoming', 'Favorites', 'Search'];
  const rootTitles = [
    'Popular Movies',
    'Upcoming Movies',
    'Favorites',
    'Search',
  ];

  const checkLinkActive = (location) => {
    const position = rootPaths.findIndex(
      (path) => path === `${location.pathname}`
    );
    if (position > -1) {
      setLinkActive(position);
    }
  };

  const listNavItem = rootPaths.map((path, index) => {
    return (
      <NavItem
        key={path}
        path={path}
        title={rootTitles[index]}
        titleShort={rootShortTitles[index]}
        isActive={activeLink === index}
      />
    );
  });

  useEffect(() => {
    checkLinkActive(location);
  }, [location]);

  return <nav className='navigation'>{listNavItem}</nav>;
}

export default Navigation;
