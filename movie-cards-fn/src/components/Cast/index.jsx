import React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import ComposedScrollContainer from '../ComposedScrollContainer';
import './Cast.scss';
import { NO_IMAGE, PERSON_URL } from '../../assets/constants';

Cast.propTypes = {
  cast: PropTypes.array,
};

Cast.defaultProps = {
  case: [],
};

function Cast(props) {
  const { cast } = props;

  const [style, set] = useSpring(() => ({
    transform: 'perspective(500px) rotateY(0deg)',
  }));

  return (
    <div className='cast'>
      <ComposedScrollContainer>
        {cast.slice(0, 15).map((person) => {
          return (
            <animated.div
              className='animated-cast-card'
              key={person.id}
              style={{ ...style }}
            >
              <img
                className='cast__cast-img'
                src={
                  person.profile_path
                    ? `${PERSON_URL}${person.profile_path}`
                    : NO_IMAGE
                }
                alt={`Cast member: ${person.name}`}
              />
              <div className='cast__text'>
                <p className='cast__cast-text'>{person.character}</p>
                <p className='cast__action-text'>{person.name}</p>
              </div>
            </animated.div>
          );
        })}
      </ComposedScrollContainer>
    </div>
  );
}

export default Cast;
