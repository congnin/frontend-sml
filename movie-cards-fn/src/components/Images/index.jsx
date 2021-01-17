import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Images.scss';
import { animated, useSpring } from 'react-spring';
import ImageModal from '../ImageModal';
import ComposedScrollContainer from '../ComposedScrollContainer';
import { BASE_IMG_URL } from '../../assets/constants';

Images.propTypes = {
  backdrops: PropTypes.array,
  title: PropTypes.string,
};

Images.defaultProps = {
  backdrops: [],
  title: '',
};

function Images(props) {
  const { backdrops, title } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [style, set] = useSpring(() => ({
    transform: 'perspective(500px) rotateY(0deg)',
  }));

  const [imageClick, setImageClick] = useState('');

  let modalScrollLock;

  const toggleScrollLock = (bool) => {
    return (modalScrollLock = bool);
  };

  const changeFocus = (ref) => {
    ref.focus();
  };

  const onModalOpen = (filepath) => {
    setImageClick(filepath);
    setModalIsOpen(true);

    toggleScrollLock(true);
  };

  const onModalClose = () => {
    setModalIsOpen(false);

    toggleScrollLock(false);
  };
  return (
    <div className='images'>
      {modalIsOpen && (
        <ImageModal
          changeFocus={changeFocus}
          images={backdrops}
          clickedImage={imageClick}
          onModalClose={onModalClose}
          title={title}
          ariaLabel='Image dialog with next and previous button.'
        ></ImageModal>
      )}
      <div className='images__bottom'>
        <ComposedScrollContainer scrollDistance='1200'>
          {backdrops.slice(0, 20).map((image) => {
            return (
              <animated.div
                className='images__spring'
                key={image.file_path}
                style={{ ...style }}
              >
                <img
                  className='images__movies'
                  src={`${BASE_IMG_URL}${image.file_path}`}
                  onClick={() => onModalOpen(image.file_path)}
                  alt='Movie Images'
                />
              </animated.div>
            );
          })}
        </ComposedScrollContainer>
      </div>
    </div>
  );
}

export default Images;
