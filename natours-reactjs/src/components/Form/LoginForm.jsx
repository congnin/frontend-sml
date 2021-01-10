import InputField from 'custom-fields/InputField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

import ClipLoader from 'react-spinners/ClipLoader';
import * as Yup from 'yup';
import './Form.scss';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  onSubmit: null,
};

function LoginForm(props) {
  const { initialValues, isSubmit } = props;

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('This field is required.').email(),

    password: Yup.string()
      .required('This field is required.')
      .min(8, 'Password is too short - should be 8 chars minimum.'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        // do something here ...
        const { values, errors, touched, isSubmitting } = formikProps;

        return (
          <Form>
            <FastField
              name="email"
              component={InputField}
              label="Email address"
              placeholder="you@example.com"
            />

            <FastField
              name="password"
              component={InputField}
              label="Password"
              type="password"
              placeholder="••••••••"
            />

            <div className="form__group">
              <button
                className="btn btn--green"
                type="submit"
                disable={isSubmit}
              >
                {isSubmit && <ClipLoader color={'#55c57a'} />} Login
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
