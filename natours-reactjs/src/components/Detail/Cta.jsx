import Images from 'constants/images';
import RouteEnum from 'constants/RouteEnum';
import React from 'react';
import { Link } from 'react-router-dom';

function Cta(props) {
  const { tour, loggedIn } = props;

  return (
    <section className="section-cta">
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img src={Images.WHITE_LOGO} alt="Natours logo" />
        </div>
        <img
          src={Images.TOURS_IMG + tour.images[1]}
          alt=""
          className="cta__img cta__img--1"
        />
        <img
          src={Images.TOURS_IMG + tour.images[2]}
          alt=""
          className="cta__img cta__img--2"
        />

        <div className="cta__content">
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className="cta__text">
            {`${tour.duration} days. 1 adventure. Infinite memories. Make it yours today!`}
          </p>
          <Link
            className="btn btn--green span-all-rows"
            to={!loggedIn ? RouteEnum.Login : RouteEnum.Home}
          >
            {loggedIn ? `Book tour now!` : `Log in to book tour`}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cta;
