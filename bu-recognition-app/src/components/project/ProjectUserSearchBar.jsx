import React, { Fragment, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HomeContext } from '../../common/context/home-context';

const ProjectUserSearchBar = () => {
  const { dispatch } = useContext(HomeContext);

  const handleChange = (e) => {
    let keyword = e.target.value;
    dispatch({ type: 'search', data: keyword });
  }

  return (
    <Fragment>
      <div className="search-bar wrapper p-3">
        <input className="form-control" placeholder="Search user"
          onChange={handleChange} />
        <FontAwesomeIcon className="search-icon" icon={['fa', 'search']} />
      </div>
    </Fragment>
  );
}

export default ProjectUserSearchBar;
