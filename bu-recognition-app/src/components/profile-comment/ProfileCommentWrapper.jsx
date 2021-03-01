import React, { Fragment, useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ProfileContext } from '../../common/context/profile-context';
import { commentApi } from '../../apis/comment.api';
import ProfileCommentItem from './ProfileCommentItem';

const ProfileCommentWrapper = (props) => {
  const { userId } = props;
  const { state, dispatch } = useContext(ProfileContext);
  const [profileComments, setProfileComments] = useState([]);

  useEffect(() => {
    commentApi.findByUserId(userId, state.projectId, state.filterType, state.pageIndex).then(res => {
      setProfileComments(res);
    })
  }, [state.projectId, state.filterType, userId]);

  const handleSelectFilterType = (type) => {
    dispatch({ type: 'selectFilterType', filterType: type });
  }

  return (
    <Fragment>
      <div className="wrapper">
        <div className="p-3">
          <ul className="list-inline">
            <li className="list-inline-item">
              {state.filterType === 'inbox' ? 
                <Fragment>
                  <h5 className="text-secondary profile-name mt-3 text-danger"><strong><FontAwesomeIcon icon={['fa', 'heart']} />&nbsp; Inbox</strong></h5>
                  <hr className="divider bg-danger mt-3" />
                </Fragment> : 
                <h5 className="text-secondary profile-name mt-3 pointer" onClick={() => handleSelectFilterType('inbox')}><strong><FontAwesomeIcon icon={['fa', 'heart']} />&nbsp; Inbox</strong></h5>
              }
            </li>
            <li className="list-inline-item">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <li className="list-inline-item">
              {state.filterType === 'recognized' ? 
                <Fragment>
                  <h5 className="text-secondary profile-name mt-3 text-info"><strong><FontAwesomeIcon icon={['fa', 'hand-holding-heart']} />&nbsp; Recognized</strong></h5>
                  <hr className="divider bg-info mt-3" />
                </Fragment> : 
                <h5 className="text-secondary profile-name mt-3 pointer" onClick={() => handleSelectFilterType('recognized')}><strong><FontAwesomeIcon icon={['fa', 'hand-holding-heart']} />&nbsp; Recognized</strong></h5>
              }
            </li>
          </ul>
          {profileComments ? profileComments.map((value, key) => {
            return <ProfileCommentItem key={key} comment={value} userId={userId} filterType={state.filterType} />
          }) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default ProfileCommentWrapper;
