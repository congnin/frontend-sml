import React from 'react';
import PropTypes from 'prop-types';
import './VideoItem.scss';

VideoItem.propTypes = {
  video: PropTypes.object,
  onVideoSelect: PropTypes.func,
};

function VideoItem(props) {
  const { video, onVideoSelect } = props;
  return (
    <div className='video-item' onClick={() => onVideoSelect(video)}>
      <img
        className='video-item__thumbnail'
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
    </div>
  );
}

export default VideoItem;
