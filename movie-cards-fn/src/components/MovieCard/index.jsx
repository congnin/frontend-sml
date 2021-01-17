import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './MovieCard.scss';
import { BASE_IMG_URL, NO_IMAGE } from '../../assets/constants';
import { convertRuntime } from '../../utils';
import RemoveFavoriteButton from '../RemoveFavoriteButton';

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  removeMode: PropTypes.bool,
  handleMovieClick: PropTypes.func.isRequired,
  handleRemoveClick: PropTypes.func,
};

function MovieCard(props) {
  const { path } = useRouteMatch();
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  const { movie, removeMode, handleMovieClick, handleRemoveClick } = props;

  const { poster_path, title, vote_average, id, details } = movie;
  const runtime = details ? details.runtime : movie.runtime;
  const imageURL = BASE_IMG_URL + poster_path;
  const noImage = NO_IMAGE;
  const convertedRuntime = convertRuntime(runtime);

  let renderRuntime;
  if (!isMobile && runtime !== 0) {
    renderRuntime = (
      <div className='runtime'>
        <i className='fas fa-stopwatch runtime__icon'></i>
        {convertedRuntime}
      </div>
    );
  }

  let renderRating;
  if (!isMobile && vote_average !== 0) {
    renderRating = (
      <div className='rating'>
        <i className='fas fa-star rating__icon'></i>
        {vote_average}
      </div>
    );
  }

  return (
    <div className='card-container'>
      <img
        className='card-container__img'
        src={poster_path ? imageURL : noImage}
        onClick={() => handleMovieClick(id, path)}
        alt={`${title} poster`}
      />
      {renderRuntime}
      {renderRating}
      {removeMode && (
        <RemoveFavoriteButton onClick={() => handleRemoveClick(movie)} />
      )}
    </div>
  );
}

export default MovieCard;
