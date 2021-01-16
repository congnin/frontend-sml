import React from 'react';
import PropTypes from 'prop-types';
import './Details.scss';
import { convertRuntime } from '../../utils';
import moment from 'moment';
import Button from '../Button';
import AddFavoriteButton from '../AddFavoriteButton';

Details.propTypes = {
  movie: PropTypes.object.isRequired,
  isInFavorites: PropTypes.bool,
  removeFavorite: PropTypes.func,
  addFavorite: PropTypes.func,
};

function Details(props) {
  const { movie, isInFavorites, removeFavorite, addFavorite } = props;

  const genresArray = movie ? movie.genres.map((genre) => genre.name) : null;

  const convertedRuntime = movie ? convertRuntime(movie.runtime) : null;
  const convertedReleaseDate = movie
    ? moment(movie.release_date, 'YYYY-MM-DD')
    : null;

  const renderRuntime = movie.runtime !== 0 && (
    <h2>
      <i className='fas fa-stopwatch details__runtime-icon'></i>
      {convertedRuntime}
    </h2>
  );

  const renderVoteAverage = movie.vote_average !== 0 && (
    <h2 style={{ color: 'gold', marginLeft: '.5em' }}>
      <i className='fas fa-star details__rating-icon'></i>
      {movie.vote_average}
    </h2>
  );

  const renderRevenue =
    movie.revenue === 0 ? (
      <p className='details__text'>Not Available</p>
    ) : (
      <p className='details__text'> {'$ ' + movie.revenue.toLocaleString()}</p>
    );

  const renderBudget =
    movie.budget === 0 ? (
      <p className='details__text'>Not Available</p>
    ) : (
      <p className='details__text'> {'$ ' + movie.budget.toLocaleString()}</p>
    );
  return (
    <div className='details'>
      <div className='details__header'>
        <h1>{movie.title}</h1>
        {movie.tagline && (
          <h3 className='details__tagline-text'>{movie.tagline}</h3>
        )}
        <h2>{genresArray.join(', ')}</h2>
        <div style={{ display: 'flex', marginTop: '.35em' }}>
          {renderRuntime}
          {renderVoteAverage}
        </div>
      </div>
      <div className='details__plot'>
        <h1>Overview</h1>
        <p>{movie.overview}</p>
      </div>
      <div className='details__bottom'>
        <div className='details__detail'>
          <h1 className='details__detail-title'>Revenue:</h1>
          {renderRevenue}
        </div>
        <div className='details__detail'>
          <h1 className='details__detail-title'>Budget:</h1>
          {renderBudget}
        </div>
        <div className='details__detail'>
          <h1 className='details__detail-title'>Release Date:</h1>
          <p className='details__text'>{convertedReleaseDate.format('LL')}</p>
        </div>
      </div>
      <div className='details__btn'>
        {isInFavorites ? (
          <Button
            title={'Remove from List'}
            onClick={() => removeFavorite(movie)}
          ></Button>
        ) : (
          <AddFavoriteButton onClick={() => addFavorite(movie)} />
        )}
      </div>
    </div>
  );
}

export default Details;
