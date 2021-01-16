import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../store/actions';
import { MOVIE_TYPE } from '../../assets/constants';
import MovieList from '../../components/MovieList';
import './UpcomingMovies.scss';
import Pagination from '../../components/Pagination';
import Loader from '../../components/Loader';

UpcomingMovies.propTypes = {};

function UpcomingMovies(props) {
  const dispatch = useDispatch();
  const { movies, page, totalPages, isError, isLoading } = useSelector(
    (state) => state.movies
  );

  const [filters, setFilters] = useState({
    page: 1,
    sort_by: 'popularity.desc',
  });

  useEffect(() => {
    dispatch(fetchMovies(MOVIE_TYPE.UPCOMING, filters));
  }, [filters]);

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      page: newPage,
    });
  }

  return (
    <div className='movie-wrapper'>
      <div className='header-page'>
        <h1 className='header-page__text'>Currently trending movies.</h1>
        <div className='header-page__pagination'>
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      {isError && <div>An error occurred, please try again.</div>}
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
    </div>
  );
}

export default UpcomingMovies;
