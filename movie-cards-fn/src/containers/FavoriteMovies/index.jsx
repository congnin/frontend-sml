import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_MODE_TOGGLED } from '../../store/actions/types';
import MovieList from '../../components/MovieList';
import { handleMovieClick, removeFavorite } from '../../store/actions';
import { useHistory } from 'react-router-dom';
import './FavoriteMovies.scss';

FavoriteMovies.propTypes = {};

function FavoriteMovies() {
  const { favorites, removeMode } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: REMOVE_MODE_TOGGLED, payload: false });
  }, [dispatch]);

  function movieClicked(id, path) {
    dispatch(
      handleMovieClick(id, () => {
        let navigationPath = `${path}/${id}/details`;

        history.push(navigationPath);
      })
    );
  }

  function removeFavoriteClicked(movie) {
    dispatch(removeFavorite(movie));
  }
  return (
    <div className='favorites'>
      {favorites.length > 0 ? (
        <>
          <h1 className='favorites__text'>Your list of favorites!</h1>
          <div className='favorites__btn-container'>
            <button
              className='favorites__btn'
              onClick={() =>
                dispatch({ type: REMOVE_MODE_TOGGLED, payload: !removeMode })
              }
            >
              {removeMode ? 'Disable Remove Mode' : 'Enable Remove Mode'}
            </button>
          </div>
          <MovieList
            movies={favorites}
            removeMode={removeMode}
            handleMovieClick={movieClicked}
            handleRemoveClick={removeFavoriteClicked}
          />
        </>
      ) : (
        <h1 className='favorites__text'>
          You have no favorites! Add favorites to quickly access them here.
        </h1>
      )}
    </div>
  );
}

export default FavoriteMovies;
