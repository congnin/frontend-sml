import React from 'react';
import PropTypes from 'prop-types';

LeftLayout.propTypes = {
  backdropImage: PropTypes.string,
};

function LeftLayout(props) {
  const { backdropImage, children } = props;
  return (
    <div className='left-layout'>
      <div className='left-layout__background'>
        <div className='left-layout__left'></div>
        <div
          className='left-layout__right'
          style={{ backgroundImage: `top center url(${backdropImage})` }}
        ></div>
      </div>
      <div className='left-layout__children'>{children}</div>
    </div>
  );
}

export default LeftLayout;
