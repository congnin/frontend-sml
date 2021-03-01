import React, { Fragment } from 'react';
import SignInForm from '../components/auth/SignInForm';

const Auth = () => {
  return (
    <Fragment>
      <div className="page-content-auth container-fluid">
        <SignInForm />
      </div>
    </Fragment>
  );
}

export default Auth;
