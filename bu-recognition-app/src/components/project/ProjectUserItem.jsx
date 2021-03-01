import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';

import { HomeContext } from '../../common/context/home-context';
import { commentApi } from '../../apis/comment.api';

const ProjectUserItem = (props) => {
  const { state, dispatch } = useContext(HomeContext);
  const { user, bg, currentUserId } = props;

  const handleReaction = () => {
    if (user.commentIsDeleted === 0 && user.content) {
      commentApi.delete({
        id: user.commentId
      }).then(res => {
        dispatch({ type: 'toggleReaction', toggleReaction: !state.toggleReaction });
      });
    }
    else {
      dispatch({ type: 'selectUser', data: user, isModalShow: true });
    }
  }

  return (
    <Fragment>
      <div className={'card-1 bg-' + bg + ' p-3'}>
        <div className="media">
          <img className="user-avatar mr-2" src={process.env.PUBLIC_URL + (user.isFemale ? '/user-female.png' : '/user.png')} width="48" />
          <div className="media-body user-name">
            <div className="mt-0">
              <Link to={'/profile?id=' + user.username}><b className="text-dark">{user.lastName} {user.firstName}</b></Link> <span>({user.username})</span>
            </div>
            <div className="mb-1"><small>{user.projectRole ? user.projectRole : 'TBA'}</small></div>
            <div><b className="text-muted">Hire date:</b>&nbsp; {user.joinedAt ? <Moment format="MMM Do, yyyy">{user.joinedAt}</Moment> : 'TBA'}</div>
            <div className="row">
              <div className="col">
                <ul className="user-actions list-inline mt-2 mb-0">
                  {currentUserId !== user.username ? <li className="list-inline-item pointer" onClick={handleReaction}>
                    {user.commentIsDeleted === 0 && user.content ? <span className="text-danger">
                      <FontAwesomeIcon icon={['fa', 'heart']} />&nbsp; Recognize&nbsp;
                    </span> : <span>
                      <FontAwesomeIcon icon={['fa', 'heart']} />&nbsp; Recognize&nbsp;
                    </span>}
                  </li> : null}
                  <li className="list-inline-item"><FontAwesomeIcon icon={['fa', 'heart']} /></li>
                  <li className="list-inline-item">{user.noOfReceiveLikes ? user.noOfReceiveLikes : 0} &nbsp;</li>
                  <li className="list-inline-item"><FontAwesomeIcon icon={['fa', 'hand-holding-heart']} /></li>
                  <li className="list-inline-item">{user.noOfLikes ? user.noOfLikes : 0}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProjectUserItem;
