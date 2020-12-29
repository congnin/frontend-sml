import Images from 'constants/images';
import React from 'react';

function SectionHeader(props) {
  const tour = props.tour;

  return (
    <div className="section-header">
      <div className="header__hero">
        <div className="header__hero-overlay">
          <img
            className="header__hero-img"
            src={Images.TOURS_IMG + tour.imageCover}
            alt={tour.name}
          />
        </div>
        <div className="heading-box">
          <h1 className="heading-primary">
            <span>{tour.name}</span>
          </h1>
          <div className="heading-box__group">
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use href={Images.CLOCK} />
              </svg>
              <span className="heading-box__text">{`${tour.duration} days`}</span>
            </div>
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use href={Images.MAP_PIN} />
              </svg>
              <span className="heading-box__text">
                {tour.startLocation.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
