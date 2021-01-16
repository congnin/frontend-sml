import React from 'react';
import PropTypes from 'prop-types';
import './AddFavoriteButton.scss';

AddFavoriteButton.propTypes = {
  onClick: PropTypes.func,
};

function AddFavoriteButton(props) {
  const { onClick } = props;
  return (
    <button className='add-btn' onClick={onClick}>
      <i className='fas fa-plus add-btn__icon'></i>
      Add to List
    </button>
  );
}

export default AddFavoriteButton;
