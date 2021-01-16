import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './SearchMovies.scss';
import SearchBar from '../../components/SearchBar';
import Loader from '../../components/Loader';
import MovieList from '../../components/MovieList';

SearchMovies.propTypes = {};

function SearchMovies(props) {
  const { movies, isLoading } = useSelector((state) => state.movies);
  return (
    <>
      <div className='search-container'>
        <SearchBar />
      </div>
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
    </>
  );
}

export default SearchMovies;
