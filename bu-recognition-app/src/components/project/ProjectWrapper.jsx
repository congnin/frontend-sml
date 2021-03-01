import React, { Fragment, useState, useEffect, useContext } from 'react';
import { HomeContext } from '../../common/context/home-context';

import { projectApi } from '../../apis/project.api';

import ProjectItem from './ProjectItem';
import ProjectUserCommentModal from './ProjectUserCommentModal';

const ProjectWrapper = (props) => {
  const { state } = useContext(HomeContext);

  const [projects, setProjects] = useState([]);
  const [currentUserId, setCurrentUserId] = useState('');

  useEffect(() => {
    projectApi.getMany().then(res => {
      setProjects(res.data);
      setCurrentUserId(res.cre);
    });
  }, [state.toggleReaction]);

  return (
    <Fragment>
      <div className="wrapper">
      {projects.map((value, key) => {
        return <ProjectItem key={key} currentUserId={currentUserId} project={value} keyword={state.keyword} bg={key % 2 ? 'light' : 'white'} />
      })}
      <ProjectUserCommentModal />
      </div>
    </Fragment>
  );
}

export default ProjectWrapper;
