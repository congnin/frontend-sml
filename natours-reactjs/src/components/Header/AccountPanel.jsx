import React, { useEffect } from 'react';
import Images from 'constants/images';
import RouteEnum from 'constants/RouteEnum';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../app/actions';

export function AccountPanel(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { info } = user;

  useEffect(() => {
    dispatch(actions.authCheckState());
  }, [dispatch]);

  const logout = () => {
    dispatch(actions.logout());
  };

  const LoginLogout = !user.loggedIn ? (
    <Link className="nav__el" to={RouteEnum.Login}>
      Login
    </Link>
  ) : (
    <Link className="nav__el nav__el--logout" onClick={logout}>
      Logout
    </Link>
  );

  const RegisterName = !user.loggedIn ? (
    <Link className="nav__el nav__el--cta" to={RouteEnum.SignUp}>
      Sign up
    </Link>
  ) : (
    <Link className="nav__el" to={RouteEnum.Me}>
      <img
        className="nav__user-img"
        src={Images.USERS_IMG + info.photo}
        alt={`${info.name}`}
      />
      <span>{`${info.name}`}</span>
    </Link>
  );

  return (
    <nav className="nav nav--user">
      {LoginLogout}
      {RegisterName}
    </nav>
  );
}
