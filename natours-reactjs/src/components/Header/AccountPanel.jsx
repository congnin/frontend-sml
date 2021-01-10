import React, { useEffect } from 'react';
import Images from 'constants/images';
import RouteEnum from 'constants/RouteEnum';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import * as actions from '../../app/actions';
import { getFirstName } from 'utils';

export function AccountPanel(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const { info } = auth;

  useEffect(() => {
    dispatch(actions.authCheckState());
  }, [dispatch]);

  const logout = () => {
    dispatch(actions.logout());
    history.push(RouteEnum.Home);
  };

  const LoginLogout = !auth.loggedIn ? (
    <Link className="nav__el" to={RouteEnum.Login}>
      Login
    </Link>
  ) : (
    <Link className="nav__el nav__el--logout" onClick={logout}>
      Logout
    </Link>
  );

  const RegisterName = !auth.loggedIn ? (
    <Link className="nav__el nav__el--cta" to={RouteEnum.SignUp}>
      Sign up
    </Link>
  ) : (
    <Link className="nav__el" to={RouteEnum.Settings}>
      <img
        className="nav__user-img"
        src={Images.USERS_IMG + info.photo}
        alt={`${info.name}`}
      />
      <span>{getFirstName(info.name)}</span>
    </Link>
  );

  return (
    <nav className="nav nav--user">
      {LoginLogout}
      {RegisterName}
    </nav>
  );
}
