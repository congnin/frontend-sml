import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

Button.propTypes = {
  onClick: PropTypes.func,
};

function Button(props) {
  const { icon, title, onClick } = props;
  return (
    <button className='primary-btn' onClick={onClick}>
      <i className='fas fa-plus primary-btn__icon'></i>
      {icon}
      {title}
    </button>
  );
}

export default Button;
