import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';
import './Navbar.scss';

Navbar.propTypes = {
  backdrops: PropTypes.array,
  videos: PropTypes.array,
};

function Navbar(props) {
  const { backdrops, videos } = props;

  let { url } = useRouteMatch();
  return (
    <nav className='navbar'>
      <NavLink
        exact
        to={`${url}/details`}
        className='navbar__link'
        activeClassName='navbar__link-active'
      >
        Details
      </NavLink>
      <NavLink
        exact
        to={`${url}/credits`}
        className='navbar__link'
        activeClassName='navbar__link-active'
      >
        Cast & Crew
      </NavLink>
      {backdrops.length > 0 && (
        <NavLink
          exact
          to={`${url}/images`}
          className='navbar__link'
          activeClassName='navbar__link-active'
        >
          Images
        </NavLink>
      )}
      {videos.length > 0 && (
        <NavLink
          exact
          to={`${url}/videos`}
          className='navbar__link'
          activeClassName='navbar__link-active'
        >
          Videos
        </NavLink>
      )}
    </nav>
  );
}

export default Navbar;
