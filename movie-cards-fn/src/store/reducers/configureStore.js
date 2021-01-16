import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import multipleMovieReducer from './multipleMovieReducer';
import singleMovieReducer from './singleMovieReducer';
import movieTrailerReducer from './movieTrailerReducer';
import favoritesReducer from './favoritesReducer';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  movies: multipleMovieReducer,
  movie: singleMovieReducer,
  trailers: movieTrailerReducer,
  favorites: favoritesReducer,
});

export default function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(reduxThunk))
  );
}
