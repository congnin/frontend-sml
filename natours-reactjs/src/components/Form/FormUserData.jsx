import FileField from 'custom-fields/FileField';
import InputField from 'custom-fields/InputField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Loader from 'react-spinners/ClipLoader';
import * as Yup from 'yup';

FormUserData.propTypes = {
  onSubmit: PropTypes.func,
};

FormUserData.defaultProps = {
  onSubmit: null,
};

function FormUserData(props) {
  const { initialValues, isSubmit, error } = props;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required.'),

    email: Yup.string().required('This field is required.').email(),
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
          <Form className="form form-user-data">
            <FastField
              name="name"
              component={InputField}
              label="Name"
              type="text"
            />

            <FastField
              name="email"
              component={InputField}
              label="Email address"
            />

            <FastField
              name="photo"
              component={FileField}
              label="Choose new photo"
            />

            <div className="form__group">
              <button className="btn btn--small btn--green" type="submit">
                {isSubmit && <Loader />} Save settings {error}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormUserData;
