import React, { Fragment, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProjectUserItem from './ProjectUserItem';

const ProjectItem = (props) => {
  const { project, bg, keyword, currentUserId } = props;

  const [users, setUsers] = useState(project.users);
  const [isCollapse, setIsCollapse] = useState(true);

  useEffect(() => {
    setUsers(project.users);
  }, [project]);

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  }

  return (
    <Fragment>
      <div className="row">
        <div className={'col bg-' + bg + ' text-dark'}>
          <div className="p-3">
            <div className="row">
              <div className="col-sm-6">
                <h5><b>{project.projectName}</b></h5>
                <div className="text-muted"><small>{isCollapse ? 'Top 3 recognized members' : project.noOfUsers + ' members'}</small></div>
                <hr className="divider bg-dark mt-3 mb-4" />
              </div>
              <div className="col-sm-6 text-right">
                {project.noOfUsers > 3 ? <h6 className="pointer" onClick={handleCollapse}>{isCollapse ? 'View all' : 'Show only top 3'} &nbsp;<FontAwesomeIcon icon={['fa', isCollapse ? 'caret-left' : 'caret-down']} /></h6> : null}
              </div>
            </div>
            <div className="row">{
              keyword ? users.map((value, key) => {
                if (value.username.toLowerCase().includes(keyword.toLowerCase()) || value.firstName.toLowerCase().includes(keyword.toLowerCase()) || value.lastName.toLowerCase().includes(keyword.toLowerCase()))
                  return <div key={key} className="col-xl-4 col-sm-6 mb-3">
                    <ProjectUserItem currentUserId={currentUserId} user={value} bg={bg === 'white' ? 'light' : 'white'} />
                </div>
              }) : users.map((value, key) => {
                return <div key={key} className="col-xl-4 col-sm-6 mb-3">
                  {isCollapse ? key < 3 ? <ProjectUserItem currentUserId={currentUserId} user={value} bg={bg === 'white' ? 'light' : 'white'} /> : null : <ProjectUserItem currentUserId={currentUserId} user={value} bg={bg === 'white' ? 'light' : 'white'} />}
                </div>
              })
            }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProjectItem;
