import React from 'react';
import PropTypes from 'prop-types';
import './MovieList.scss';
import MovieCard from '../MovieCard';

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  removeMode: PropTypes.bool,
  handleMovieClick: PropTypes.func.isRequired,
  handleRemoveClick: PropTypes.func,
};

function MovieList(props) {
  const { movies, removeMode, handleMovieClick, handleRemoveClick } = props;
  const renderMovieCards = movies.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        movie={movie}
        removeMode={removeMode}
        handleMovieClick={handleMovieClick}
        handleRemoveClick={handleRemoveClick}
      />
    );
  });
  return <div className='movie-container'>{renderMovieCards}</div>;
}

export default MovieList;
