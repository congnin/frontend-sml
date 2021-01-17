import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Right = styled.div`
  background: no-repeat center url(${(props) => props.posterPath});
  background-size: cover;

  width: 70%;
`;

LeftLayout.propTypes = {
  backdropImage: PropTypes.string,
};

function LeftLayout(props) {
  const { backdropImage, children } = props;
  console.log(backdropImage);
  return (
    <div className='left-layout'>
      <div className='left-layout__background'>
        <div className='left-layout__left'></div>
        <Right posterPath={backdropImage}></Right>
      </div>
      <div className='left-layout__children'>{children}</div>
    </div>
  );
}

export default LeftLayout;
