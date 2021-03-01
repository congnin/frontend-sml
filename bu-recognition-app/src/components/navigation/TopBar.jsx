import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../common/context/auth-context';
import { authApi } from '../../apis/auth.api';

const TopBar = () => {
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    authApi.findAdUser().then(res => {
      setCurrentUser(res.given_name);
    });
  }, []);

  const signOut = () => {
    AuthContext.logOut();
  }

  return (
    <Fragment>
      <div className="top-bar container-fluid bg-gradient text-white">
        <div className="row">
          <div className="col">
            <div className="p-3">
              <div className="row">
                <div className="col-4 col-sm-6">
                  <Link to="/">
                    <img className="mr-2" src={process.env.PUBLIC_URL + '/logo.png'} height="24" /> 
                    <span className="text-white d-none d-sm-inline">Digital Finance Solutions</span>
                    <span className="text-white d-inline d-sm-none">DFS</span>
                  </Link>
                </div>
                <div className="col-8 col-sm-6 text-right">
                  <span className="d-none d-sm-inline">You're logging as</span> <Link to={'/profile?id=' + currentUser}>
                    <b className="text-white text-uppercase">{currentUser}</b>
                  </Link>&nbsp; | &nbsp;<span><b className="text-white pointer" onClick={signOut}>Log out</b></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TopBar;
