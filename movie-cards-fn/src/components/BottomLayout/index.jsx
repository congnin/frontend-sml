import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './BottomLayout.scss';

BottomLayout.propTypes = {
  backdropImage: PropTypes.string,
};

function BottomLayout(props) {
  const { backdropImage, children } = props;

  useEffect(() => {});
  return (
    <div className='bottom-layout'>
      <div className='bottom-layout__background'>
        <div
          className='bottom-layout__top'
          style={{ backgroundImage: `top center url(${backdropImage})` }}
        ></div>
        <div className='bottom-layout__bottom'></div>
        <div className='bottom-layout__children'>{children}</div>
      </div>
    </div>
  );
}

export default BottomLayout;
