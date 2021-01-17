import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from '../VideoItem';

VideoList.propTypes = {
  videos: PropTypes.array,
};

VideoList.defaultProps = {
  videos: [],
};

function VideoList(props) {
  const { videos } = props;
  return (
    <>
      {videos.map((video) => {
        return <VideoItem key={video.id} video={video} />;
      })}
    </>
  );
}

export default VideoList;
