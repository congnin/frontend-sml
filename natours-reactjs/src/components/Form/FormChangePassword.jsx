import InputField from 'custom-fields/InputField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Loader from 'react-spinners/ClipLoader';
import * as Yup from 'yup';

FormChangePassword.propTypes = {
  onSubmit: PropTypes.func,
};

FormChangePassword.defaultProps = {
  onSubmit: null,
};

function FormChangePassword(props) {
  const { initialValues, isSubmit, error } = props;

  const validationSchema = Yup.object().shape({
    currentPass: Yup.string().required('This field is required.'),
    newPass: Yup.string()
      .required('This field is required.')
      .min(8, 'Password is too short - should be 8 chars minimum.'),
    confirmPass: Yup.string()
      .oneOf([Yup.ref('newPass'), null], "Passwords don't match")
      .required('Confirm Password is required'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
      initialValues={initialValues}
    >
      {(formikProps) => {
        // do something here ...
        const { values, errors, touched, isSubmitting, isValid } = formikProps;

        return (
          <Form className="form form-user-password" loading={isSubmitting}>
            <FastField
              name="currentPass"
              label="Current password"
              type="password"
              placeholder="••••••••"
              component={InputField}
            />

            <FastField
              name="newPass"
              label="New password"
              type="password"
              placeholder="••••••••"
              component={InputField}
            />

            <FastField
              name="confirmPass"
              label="Confirm password"
              type="password"
              placeholder="••••••••"
              component={InputField}
            />

            <div className="form__group right">
              <button
                className="btn btn--small btn--green btn--save-password"
                type="submit"
                disabled={!isValid}
              >
                {isSubmit && <Loader />} Save password
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormChangePassword;
