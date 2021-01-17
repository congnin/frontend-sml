import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './ImageModal.scss';
import { POSTER_URL } from '../../assets/constants';

ImageModal.propTypes = {
  images: PropTypes.array,
};

function ImageModal(props) {
  const {
    images,
    clickedImage,
    onModalClose,
    title,
    ariaLabel,
    role = 'dialog',
  } = props;

  const [modalImageSource, setModalImageSource] = useState(clickedImage);
  const [controls, setControls] = useState({ left: true, right: true });

  let currentIndex = images.findIndex(
    (item) => item.file_path === modalImageSource
  );

  const checkIndexes = () => {
    setControls({
      left: currentIndex - 1 >= 0,
      right: currentIndex + 1 < images.length,
    });
  };

  const prevImage = (images) =>
    setModalImageSource(images[currentIndex - 1].file_path);

  const nextImage = (images) =>
    setModalImageSource(images[currentIndex + 1].file_path);

  const onKeyDown = ({ keyCode }) => keyCode === 27 && onModalClose();

  const buttonRef = useRef(null);

  useEffect(() => {
    checkIndexes();

    // Changes focus to Modal's Close Button.
    if (buttonRef) {
      buttonRef.current.focus();
    }
  }, [modalImageSource, currentIndex, buttonRef]);

  return (
    <div
      className='image-modal'
      onClick={onModalClose}
      aria-modal='true'
      tabIndex='-1'
      role={role}
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
    >
      <div
        className='image-modal__content'
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className='image-modal__heading'>{title}</h1>
        <img
          className='image-modal__img'
          src={`${POSTER_URL}${modalImageSource}`}
          alt=''
        />
        <button
          className='image-modal__close-btn'
          as='button'
          onClick={onModalClose}
          aria-label='Close Modal'
          ref={(node) => (buttonRef.current = node)}
        >
          <i className='fas fa-window-close'></i>
        </button>
        <div className='image-modal__controls'>
          {controls.left && (
            <button
              className='image-modal__scroll-btn'
              onClick={() => prevImage(images)}
            >
              <i className='fas fa-angle-double-left'></i>
            </button>
          )}
          {controls.right && (
            <button
              className='image-modal__scroll-btn'
              onClick={() => nextImage(images)}
            >
              <i className='fas fa-angle-double-right'></i>
            </button>
          )}
          <h1 className='image-modal__progress-text'>
            {currentIndex + 1} / {images.length}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
