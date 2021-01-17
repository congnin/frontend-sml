import React, { useRef, useState, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import debounce from 'lodash.debounce';
import { useScroll } from 'react-use-gesture';
import PropTypes from 'prop-types';
import './ComposedScrollContainer.scss';

ComposedScrollContainer.propTypes = {
  scrollDistance: PropTypes.number,
};

function ComposedScrollContainer(props) {
  const { children, scrollDistance = 300 } = props;
  const refContainer = useRef(null);

  const [overflowPresent, setOverflowPresent] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const checkForOverflow = () => {
    const { scrollWidth, clientWidth } = refContainer.current;
    const hasOverflow = scrollWidth > clientWidth;

    setOverflowPresent(hasOverflow);
    console.log('overflow checked', hasOverflow);
  };

  const checkForScrollPosition = () => {
    const { scrollLeft, scrollWidth, clientWidth } = refContainer.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
  };

  const debounceCheckForOverflow = debounce(checkForOverflow, 1000);
  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 500);

  const scrollContainerBy = (distance) => {
    refContainer.current.scrollBy({ left: distance, behavior: 'smooth' });
  };

  const [style, set] = useSpring(() => ({
    transform: 'perspective(500px) rotateY(0deg)',
  }));

  const clamp = (value, clampAt = 30) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });

  useEffect(() => {
    checkForOverflow();
    checkForScrollPosition();
    refContainer.current.addEventListener(
      'scroll',
      debounceCheckForScrollPosition
    );
  }, [canScrollLeft, canScrollRight]);
  return (
    <div className='scroll-container'>
      {canScrollLeft && (
        <button
          className='scroll-container__left'
          onClick={() => scrollContainerBy(-scrollDistance)}
        >
          <i className='fas fa-chevron-down prev-icon'></i>
        </button>
      )}

      {canScrollRight && (
        <button
          className='scroll-container__right'
          onClick={() => scrollContainerBy(scrollDistance)}
        >
          <i className='fas fa-chevron-down next-icon'></i>
        </button>
      )}
      <div
        className='horizontal-container'
        ref={(node) => {
          refContainer.current = node;
        }}
        {...bind()}
      >
        {children}
      </div>
    </div>
  );
}

export default ComposedScrollContainer;
