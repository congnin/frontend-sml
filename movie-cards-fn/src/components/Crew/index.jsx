import React from 'react';
import PropTypes from 'prop-types';
import './Crew.scss';

Crew.propTypes = {
  crew: PropTypes.array.isRequired,
};

Crew.defaultProps = {
  crew: [],
};

function Crew(props) {
  const { crew } = props;

  const findPersonWithJob = (crew = [], jobName = '') => {
    let searchedPerson = crew.find((person) => person.job === jobName);

    if (searchedPerson) {
      return searchedPerson.name;
    } else {
      return 'Not Available';
    }
  };

  const director = findPersonWithJob(crew, 'Director');

  const composer = findPersonWithJob(crew, 'Original Music Composer');

  const writers = crew
    .filter((person) => person.job === 'Screenplay' || person.job === 'Writer')
    .map((person) => person.name)
    .join(', ');

  return (
    <div className='crew'>
      <h1 className='crew__title'>Cast & Crew</h1>
      <div className='crew__column'>
        <h1 className='crew_heading'>Director: </h1>
        <p className='crew__text'>{director} </p>
      </div>
      <div className='crew__column'>
        <h1 className='crew_heading'>Screenplay: </h1>
        <p className='crew__text'> {writers} </p>
      </div>
      <div className='crew__column'>
        <h1 className='crew_heading'>Music: </h1>
        <p className='crew__text'>{composer}</p>
      </div>
    </div>
  );
}

export default Crew;
