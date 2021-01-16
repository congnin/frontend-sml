import React from 'react';
import PropTypes from 'prop-types';
import './RemoveFavoriteButton.scss';

RemoveFavoriteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function RemoveFavoriteButton(props) {
  const { onClick } = props;
  return (
    <button className='delete-btn' onClick={onClick}>
      <i className='fas fa-trash delete-btn__icon'></i> Delete
    </button>
  );
}

export default RemoveFavoriteButton;
