import PropTypes from 'prop-types';
import React from 'react';
import { ErrorMessage } from 'formik';
import Images from 'constants/images';

FileField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

FileField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
};

function FileField(props) {
  const { field, form, label, placeholder, disabled, photo } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <div className="form__group form__photo-upload">
      <img
        className="form__user-photo"
        src={Images.USERS_IMG + photo}
        alt={photo}
      />

      <input
        id={name}
        name={name}
        {...field}
        type="file"
        disabled={disabled}
        placeholder={placeholder}
        invalid={showError}
        accept="image/*"
        className="form__upload"
      />

      {label && <label htmlFor={name}>{label}</label>}

      <ErrorMessage name={name} />
    </div>
  );
}

export default FileField;
