import PropTypes from 'prop-types';
import React from 'react';
import { ErrorMessage } from 'formik';

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
};

function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <div className="form__group">
      {label && (
        <label htmlFor={name} className="form__label">
          {label}
        </label>
      )}

      <input
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        invalid={showError}
        className="form__input"
      />

      <ErrorMessage name={name} />
    </div>
  );
}

export default InputField;
