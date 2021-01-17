import React from 'react';
import PropTypes from 'prop-types';
import './Credits.scss';
import Cast from '../Cast';
import Crew from '../Crew';

Credits.propTypes = {
  credits: PropTypes.object,
};

function Credits(props) {
  const { credits } = props;
  return (
    <div className='credits'>
      <Crew crew={credits.crew} />
      <Cast cast={credits.cast} />
    </div>
  );
}

export default Credits;
