import Images from 'constants/images';
import RouteEnum from 'constants/RouteEnum';
import React from 'react';
import { Link } from 'react-router-dom';
import { AccountPanel } from './AccountPanel';
import './Header.scss';

function Header(props) {
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link className="nav__el" to={RouteEnum.Home}>
          All tours
        </Link>
      </nav>
      <div className="header__logo">
        <img src={Images.WHITE_LOGO} alt="Natours logo" />
      </div>
      <AccountPanel />
    </header>
  );
}

export default Header;
