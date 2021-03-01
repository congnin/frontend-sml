import React, { Fragment, useState, useEffect } from 'react';
import { runWithAdal } from 'react-adal';
import { AuthContext } from '../../common/context/auth-context';
import { appUrl } from '../../config';
import { authApi } from '../../apis/auth.api';

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [authFailedMessage, setAuthFailedMessage] = useState('');

  useEffect(() => {
    authApi.adSignIn().then(res => {
      if (res.message === 'success') {
        window.location.replace(appUrl);
      }
    });
  }, []);

  const handleAdSignIn = (e) => {
    e.preventDefault();
    runWithAdal(AuthContext, () => {
      require('../../indexApp.js');
    }, false);
  }

  return (
    <Fragment>
      <div className="form-sign-in row mt-5">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
          <div className="row m-3 card-1">
            <div className="col-md-6 bg-dark text-white">
              <div className="p-5">
                <p><img className="mr-2" src={process.env.PUBLIC_URL + '/logo.png'} width="64" /> FPT Software</p>
                <p className="text-muted mt-5">WELCOME TO DFS!</p>
                <h1 className="mb-5">Digital<br />Finance<br />Solutions</h1>
                <div className="mb-3">
                  <button type="button" className="btn btn-warning btn-block" onClick={handleAdSignIn}>Sign in with <b>FSOFT Account</b></button>
                </div>
              </div>
            </div>
            <div className="col-md-6 bg-white text-dark" style={{ background: 'url(/bg-login.jpg) top right', backgroundSize: 'cover' }}>

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SignInForm;
