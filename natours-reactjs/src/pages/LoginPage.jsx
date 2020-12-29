import { auth } from 'app/actions';
import LoginForm from 'components/Form/LoginForm';
import Loader from 'components/Loader';
import RouteEnum from 'constants/RouteEnum';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function LoginPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const errors = useSelector((state) => state.errors);
  const { authLoading, authErrMsg } = errors;

  const initialValues = { email: 'test@jonas.io', password: '' };

  const handleSubmit = (values) => {
    dispatch(
      auth(values.email, values.password, () => {
        history.push(RouteEnum.Home);
      })
    );
  };

  return (
    <main className="main">
      {authErrMsg && <h1>{authErrMsg}</h1>}
      {authLoading ? (
        <Loader />
      ) : (
        <div className="login-form">
          <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
          <LoginForm initialValues={initialValues} onSubmit={handleSubmit} />
        </div>
      )}
    </main>
  );
}

export default LoginPage;
