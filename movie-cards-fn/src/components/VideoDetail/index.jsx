import React from 'react';
import PropTypes from 'prop-types';

VideoDetail.propTypes = {
  video: PropTypes.object,
};

function VideoDetail(props) {
  const { video } = props;
  const videoSrc = `https://www.youtube.com/embed/${video.id}`;
  return (
    <div className='video-detail'>
      <div className='video-detail__wrapper'>
        <iframe
          className='video-detail__player'
          title='video player'
          src={videoSrc}
          allowFullScreen
          frameBorder='0'
        ></iframe>
      </div>
    </div>
  );
}

export default VideoDetail;
