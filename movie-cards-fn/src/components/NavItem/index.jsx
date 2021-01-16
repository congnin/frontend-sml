import React from 'react';
import PropTypes from 'prop-types';
import './NavItem.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import SearchBar from '../SearchBar';

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleShort: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

function NavItem(props) {
  const { path, title, titleShort, isActive } = props;
  const location = useLocation();

  const isMobile = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const renderSearchBarOrNavLink =
    location.pathname !== '/search' && !isActive && path === '/search' ? (
      <SearchBar inline />
    ) : (
      <NavLink
        exact
        to={path}
        className={`nav-item navItem-${isActive ? `active` : `none`}`}
        activeClassName='nav-item-active'
      >
        {isMobile ? titleShort : title}
      </NavLink>
    );

  return <>{renderSearchBarOrNavLink}</>;
}

export default NavItem;
