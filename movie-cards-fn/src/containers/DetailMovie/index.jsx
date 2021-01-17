import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './DetailMovie.scss';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/Navbar';
import Loader from '../../components/Loader';
import BottomLayout from '../../components/BottomLayout';
import Details from '../../components/Details';
import LeftLayout from '../../components/LeftLayout';

import { Route, Switch, useRouteMatch, withRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { fetchMovie, addFavorite, removeFavorite } from '../../store/actions';
import { NO_IMAGE, POSTER_URL } from '../../assets/constants';
import Credits from '../../components/Credits';
import Images from '../../components/Images';
import Videos from '../../components/Videos';

DetailMovie.propTypes = {};

function DetailMovie(props) {
  const dispatch = useDispatch();
  const {
    movie,
    videos,
    images,
    credits,
    isLoading,
    clickedMovieId,
  } = useSelector((state) => state.movie);

  const { favorites } = useSelector((state) => state.favorites);

  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1023px)' });
  const urlMovieId = clickedMovieId ? clickedMovieId : props.match.params.id;

  useEffect(() => {
    dispatch(fetchMovie(urlMovieId));
  }, [dispatch, urlMovieId]);

  const { path, url } = useRouteMatch();

  const posterURL = POSTER_URL;

  const ROOT_PATH = `${url}/details`;
  const CREDITS_PATH = `${url}/credits`;
  const IMAGES_PATH = `${url}/images`;
  const VIDEOS_PATH = `${url}/videos`;

  let backdropImage;

  if (images && images.backdrops.length >= 4) {
    switch (props.location.pathname) {
      case ROOT_PATH:
        backdropImage = `${posterURL}${images.backdrops[0].file_path}`;
        break;

      case CREDITS_PATH:
        backdropImage = `${posterURL}${images.backdrops[1].file_path}`;
        break;

      case IMAGES_PATH:
        backdropImage = `${posterURL}${images.backdrops[2].file_path}`;
        break;

      case VIDEOS_PATH:
        backdropImage = `${posterURL}${images.backdrops[3].file_path}`;
        break;

      default:
        backdropImage = `${posterURL}${images.backdrops[0].file_path}`;
        break;
    }
  } else if (images && images.backdrops.length > 0) {
    backdropImage = `${posterURL}${images.backdrops[0].file_path}`;
  } else if (images && images.posters.length > 0) {
    backdropImage = `${posterURL}${images.posters[0].file_path}`;
  } else {
    backdropImage = NO_IMAGE;
  }

  function handleRemoveFavorite(movie) {
    dispatch(removeFavorite(movie));
  }

  function handleAddFavorite(movie) {
    dispatch(addFavorite(movie));
  }

  let isInFavorites = false;
  if (
    favorites &&
    movie &&
    favorites.length > 0 &&
    favorites.find((item) => item.id === movie.id)
  ) {
    isInFavorites = true;
  }

  return (
    <>
      {!isLoading && movie ? (
        <>
          <Navbar backdrops={images.backdrops} videos={videos.results} />
          <Switch>
            <Route path={`${path}/details`}>
              {isMobileOrTablet ? (
                <BottomLayout backdropImage={backdropImage}>
                  <Details
                    movie={movie}
                    isInFavorites={isInFavorites}
                    removeFavorite={handleRemoveFavorite}
                    addFavorite={handleAddFavorite}
                  />
                </BottomLayout>
              ) : (
                <LeftLayout backdropImage={backdropImage}>
                  <Details
                    movie={movie}
                    isInFavorites={isInFavorites}
                    removeFavorite={handleRemoveFavorite}
                    addFavorite={handleAddFavorite}
                  />
                </LeftLayout>
              )}
            </Route>
            <BottomLayout backdropImage={backdropImage}>
              <Route path={`${path}/credits`}>
                <Credits credits={credits} />
              </Route>
              <Route path={`${path}/images`}>
                <Images backdrops={images.backdrops} title={movie.title} />
              </Route>
              <Route path={`${path}/videos`}>
                <Videos />
              </Route>
            </BottomLayout>
          </Switch>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default withRouter(DetailMovie);
