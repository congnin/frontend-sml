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
    current: Yup.string().required('This field is required.'),

    newPass: Yup.string()
      .required('This field is required.')
      .min(8, 'Password is too short - should be 8 chars minimum.'),

    confirmPass: Yup.string().required('This field is required.'),
  });

  // npm i --save react-select
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
          <Form className="form form-user-password">
            <FastField
              name="current"
              component={InputField}
              label="Current password"
              type="password"
              placeholder="••••••••"
            />

            <FastField
              name="new"
              component={InputField}
              label="New password"
              type="password"
              placeholder="••••••••"
            />

            <FastField
              name="confirm"
              component={InputField}
              label="Confirm password"
              type="password"
              placeholder="••••••••"
            />

            <div className="form__group right">
              <button
                className="btn btn--small btn--green btn--save-password"
                type="submit"
              >
                {isSubmit && <Loader />} Save password {error}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormChangePassword;
