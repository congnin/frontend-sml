import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Videos.scss';
import VideoDetail from '../VideoDetail';
import VideoList from '../VideoList';
import Loader from '../Loader';
import ComposedScrollContainer from '../ComposedScrollContainer';
import { fetchTrailers, onVideoSelect } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';

Videos.propTypes = {
  videos: PropTypes.array,
  trailers: PropTypes.array,
};

Videos.defaultProps = {
  videos: [],
  trailers: [],
};

function Videos(props) {
  const { videos } = useSelector((state) => state.movie.videos.results);
  const { trailers, clickedVideo, isLoading } = useSelector(
    (state) => state.trailers
  );

  const dispatch = useDispatch();
  const trailerKeys = videos && videos.map((video) => video.key).join(',');

  useEffect(() => {
    dispatch(fetchTrailers(trailerKeys));

    // Reset Video on Component unmount
    return () => {
      onVideoSelect(null);
    };
  }, [fetchTrailers, trailerKeys, onVideoSelect]);

  return (
    <>
      {!isLoading ? (
        <>
          <div className='videos'>
            {clickedVideo && <VideoDetail video={trailers.clickedVideo} />}
            {clickedVideo && (
              <button
                className='videos__btn'
                onClick={() => onVideoSelect(null)}
              >
                <i className='fas fa-chevron-down'></i>
              </button>
            )}
            <div className='videos__flex'>
              <ComposedScrollContainer>
                {trailers && <VideoList videos={videos} />}
              </ComposedScrollContainer>
            </div>
          </div>
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </>
  );
}

export default Videos;
