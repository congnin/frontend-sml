import React from 'react';
import PropTypes from 'prop-types';
import './TourCard.scss';
import Images from 'constants/images';
import { Link } from 'react-router-dom';
import { getLocaleDateString } from 'utils';

TourCard.propTypes = {
  tour: PropTypes.object,
  onTourClick: PropTypes.func,
};

TourCard.defaultProps = {
  tour: {},
  onTourClick: null,
};

function TourCard(props) {
  const { tour, onTourClick } = props;

  const handleDetailClick = () => {
    if (onTourClick) onTourClick(tour);
  };

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img
            src="https://source.unsplash.com/random/"
            alt={tour.name}
            className="card__picture-img"
          />
        </div>

        <h3 className="heading-tertirary">
          <span>{tour.name}</span>
        </h3>
      </div>
      <div className="card__details">
        <h4 className="card__sub-heading">{`${tour.difficulty} ${tour.duration}-day tour`}</h4>
        <p className="card__text">{tour.summary}</p>
        <div className="card__data">
          <svg className="card__icon">
            <use href={Images.MAP_PIN} />
          </svg>
          <span>{tour.startLocation.description}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use href={Images.CALENDAR}></use>
          </svg>
          <span>{getLocaleDateString(tour.startDates[0])}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use href={Images.FLAG} />
          </svg>
          <span>{`${tour.locations.length} stops`}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use href={Images.USER} />
          </svg>
          <span>{`${tour.maxGroupSize} people`}</span>
        </div>
      </div>
      <div className="card__footer">
        <p>
          <span className="card__footer-value">{`$${tour.price}`}</span>
          <span className="card__footer-text">&nbsp;per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">{tour.ratingsAverage}</span>
          <span className="card__footer-text">
            {` rating (${tour.ratingsQuantity})`}
          </span>
        </p>
        <Link to={`/tour/${tour.id}`} className="btn btn--green btn--small">
          Details
        </Link>
      </div>
    </div>
  );
}

export default TourCard;
