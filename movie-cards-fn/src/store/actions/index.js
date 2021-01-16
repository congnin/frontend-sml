import tmdb from '../../api/tmdb';
import youtube from '../../api/youtube';
import { MOVIE_TYPE } from '../../assets/constants';
import {
  FETCH_MOVIE_INITIATED,
  FETCH_MOVIE_FAILED,
  FETCH_MOVIE_SUCCEEDED,
  FETCH_MOVIES_INITIATED,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_SUCCEEDED,
  FETCH_TRAILERS_INITIATED,
  FETCH_TRAILERS_FAILED,
  FETCH_TRAILERS_SUCCEEDED,
  SEARCH_QUERY_SUBMITTED,
  ADDED_FAVORITE,
  REMOVED_FAVORITE,
  VIDEO_CLICKED,
  MOVIE_CLICKED,
} from './types';

export const handleMovieClick = (id, callback) => async (dispatch) => {
  dispatch({ type: MOVIE_CLICKED, payload: id });

  if (callback) {
    callback();
  }
};

export const fetchMovies = (type, params, query = '') => async (dispatch) => {
  if (query) {
    dispatch({ type: SEARCH_QUERY_SUBMITTED, payload: query });
  }
  dispatch({ type: FETCH_MOVIES_INITIATED });
  try {
    let response;
    if (type === MOVIE_TYPE.POPULAR) {
      response = await tmdb.getPopular(params);
    } else if (type === MOVIE_TYPE.UPCOMING) {
      response = await tmdb.getUpcoming(params);
    } else {
      response = await tmdb.search(params);
    }
    await Promise.all(
      response.results.map(async (movie) => {
        const detailParams = {
          language: 'en-US',
        };
        const responseDetails = await tmdb.getDetail(movie.id, detailParams);

        movie.details = responseDetails;
      })
    );
    dispatch({
      type: FETCH_MOVIES_SUCCEEDED,
      payload: response.results,
      page: response.page,
      totalPages: response.total_pages,
    });
  } catch (err) {
    dispatch({ type: FETCH_MOVIES_FAILED });
    console.error('%cData Fetching Error:', 'font-size: 18px', err);
  }
};

export const fetchMovie = (id) => async (dispatch) => {
  dispatch({ type: FETCH_MOVIE_INITIATED });

  try {
    const params = {
      append_to_response: 'credits,videos,images',
      include_image_language: 'en',
    };
    const response = await tmdb.getDetail(id, params);

    dispatch({ type: FETCH_MOVIE_SUCCEEDED, payload: response });
  } catch (error) {
    dispatch({ type: FETCH_MOVIE_FAILED });
    console.error('%cData Fetching Error:', 'font-size: 18px', error);
  }
};

export const fetchTrailers = (trailerIds) => async (dispatch) => {
  dispatch({ type: FETCH_TRAILERS_INITIATED });

  try {
    const response = await youtube.get('/videos', {
      params: {
        id: trailerIds,
        part: 'snippet,contentDetails,statistics',
        key: 'AIzaSyBucMTFNz6erbvtlGY-pGeRUfxGm-jJ3Sk',
      },
    });

    dispatch({ type: FETCH_TRAILERS_SUCCEEDED, payload: response.data.items });
  } catch (error) {
    dispatch({ type: FETCH_TRAILERS_FAILED });
    console.error('%cData Fetching Error:', 'font-size: 18px', error);
  }
};

export const addFavorite = (movie) => (dispatch, getState) => {
  const { favorites } = getState().favorites;

  if (favorites.length === 0) {
    // initial fav added, and saved to localstorage.
    localStorage.setItem('favorites', JSON.stringify([movie]));
    return dispatch({ type: ADDED_FAVORITE, payload: movie });
  } else if (favorites.length > 0) {
    // If multiple favorites exist, handle duplicates. If none, append state and localstorage.
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));

    if (storedFavorites.find((i) => i.id === movie.id)) {
      //TODO: Add notifications for error handling.
      return console.log('match found via find');
    } else {
      localStorage.setItem(
        'favorites',
        JSON.stringify([...storedFavorites, movie])
      );

      return dispatch({ type: ADDED_FAVORITE, payload: movie });
    }
  }
};

export const removeFavorite = (movie) => (dispatch, getState) => {
  const { favorites } = getState().favorites;
  const storedFavorites = JSON.parse(localStorage.getItem('favorites'));

  const newFavorites = favorites.filter((i) => i.id !== movie.id);

  const filteredStoredFavorites = storedFavorites.filter(
    (i) => i.id !== movie.id
  );

  localStorage.setItem('favorites', JSON.stringify(filteredStoredFavorites));

  dispatch({ type: REMOVED_FAVORITE, payload: newFavorites });
};

export const onVideoSelect = (video) => {
  console.log('vid triggered...');
  return { type: VIDEO_CLICKED, payload: video };
};
