import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './SearchBar.scss';
import { fetchMovies } from '../../store/actions';
import { MOVIE_TYPE } from '../../assets/constants';

SearchBar.propTypes = {
  inline: PropTypes.bool,
};

function SearchBar(props) {
  const { inline } = props;
  const [query, setQuery] = useState('');
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { submittedQuery } = useSelector((state) => state.movies);

  useEffect(() => {
    if (submittedQuery && location.pathname === '/search') {
      setQuery(submittedQuery);
    }
  }, [submittedQuery, location]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = {
      query,
      page: 1,
      include_adult: true,
    };
    dispatch(fetchMovies(MOVIE_TYPE.SEARCH, params, query));
    if (inline) {
      history.push('/search');
    }
  };

  return (
    <form
      className={`search ${inline ? `search-inline` : ''}`}
      onSubmit={handleSearchSubmit}
    >
      <input
        className='search__input'
        type='text'
        placeholder='Search'
        name='search'
        autoComplete='off'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type='submit' className='search__btn'>
        <i className='fas fa-search'></i>
      </button>
    </form>
  );
}

export default SearchBar;
