import { auth } from 'app/actions';
import LoginForm from 'components/Form/LoginForm';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Loader from 'react-spinners/ClipLoader';

function LoginPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const errors = useSelector(state => state.errors);
  const { authLoading, authErrMsg } = errors;

  const initialValues = { email: 'test@jonas.io', password: '' };

  const handleSubmit = (values) => {
    dispatch(
      auth(values.email, values.password, () => {
        history.push('/');
      })
    );
  };

  return (
    <main className="main">
      {authErrMsg && <h1>{authErrMsg}</h1>}
      {authLoading ? <Loader /> :
        <div className="login-form">
          <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
          <LoginForm initialValues={initialValues} onSubmit={handleSubmit} />
        </div>
      }
    </main>
  );
}

export default LoginPage;
