import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './BottomLayout.scss';

const Top = styled.div`
  background: top center url(${(props) => props.posterPath});
  background-size: cover;

  height: 65%;
  width: 100vw;
`;

BottomLayout.propTypes = {
  backdropImage: PropTypes.string,
};

function BottomLayout(props) {
  const { backdropImage, children } = props;

  useEffect(() => {});
  return (
    <div className='bottom-layout'>
      <div className='bottom-layout__background'>
        <Top posterPath={props.backdropImage}></Top>
        <div className='bottom-layout__bottom'></div>
        <div className='bottom-layout__children'>{children}</div>
      </div>
    </div>
  );
}

export default BottomLayout;
