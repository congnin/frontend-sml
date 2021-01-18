import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { AsyncTypeahead, Highlighter } from 'react-bootstrap-typeahead';
import TMDBLogo from '../images/tmdb.svg';

Search.propTypes = {
  onSelectedItem: PropTypes.func,
};

const SEARCH_URI = 'https://api.themoviedb.org/3/search/movie';

function Search(props) {
  const { onSelectedItem } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const typeahead = useRef(null);

  const handleSearch = (query) => {
    setIsLoading(true);

    fetch(
      `${SEARCH_URI}?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`
    )
      .then((resp) => resp.json())
      .then(({ results }) => {
        const options = results.map((movie) => ({
          value: movie.original_title,
          id: movie.id,
        }));

        setOptions(options);
        setIsLoading(false);
      });
  };

  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  function handleInputChange(input, e) {
    // console.log('value', input);
  }

  function handleChange(selectedOptions, index) {
    if (onSelectedItem && selectedOptions && selectedOptions.length > 0) {
      onSelectedItem(selectedOptions[0]);
      typeahead.current.clear();
    }
  }

  return (
    <div className='col-xs-12 search-container nopadding'>
      <div className='row'>
        <div className='col-xs-12 col-sm-6 col-lg-5'>
          <a href='./' title='ReactJS TMDb Movie Search'>
            <img src={TMDBLogo} className='logo' alt='The Movie Database' />
          </a>
        </div>
        <div className='col-xs-12 col-sm-6 col-lg-7'>
          <AsyncTypeahead
            ref={typeahead}
            filterBy={filterBy}
            id='async-example'
            isLoading={isLoading}
            labelKey='value'
            minLength={3}
            onSearch={handleSearch}
            options={options}
            useCache={true}
            onInputChange={handleInputChange}
            onChange={handleChange}
            placeholder='Search Movie Title...'
            renderMenuItemChildren={(option, props) => (
              <Highlighter search={props.text}>
                {option[props.labelKey]}
              </Highlighter>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
