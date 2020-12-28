import React from 'react';
import PropTypes from 'prop-types';
import TourCard from '../TourCard';

TourList.propTypes = {
  tours: PropTypes.array,
  onTourDetailClick: PropTypes.func,
};

TourList.defaultProps = {
  tours: [],
  onTourDetailClick: null,
};

function TourList(props) {
  const { tours } = props;
  return (
    <div className="card-container">
      {tours.map((tour) => (
        <TourCard tour={tour} key={tour._id} />
      ))}
    </div>
  );
}

export default TourList;
