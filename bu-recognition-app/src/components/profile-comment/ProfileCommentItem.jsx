import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad } from '@fortawesome/free-solid-svg-icons';

const ProfileCommentItem = (props) => {
  const { comment, userId, filterType } = props;

  return (
    <Fragment>
      {filterType === 'inbox' ? 
      <div className="media mt-2 mr-5">
        <img className="user-avatar mr-3" src={process.env.PUBLIC_URL + (comment.isFemale ? '/user-female.png' : '/user.png')} width="48" />
        <div className="media-body mr-5">
          <div className="mt-0">
            <Link to={'/profile?id=' + comment.commentatorUsername}><b className="text-dark">{comment.commentatorLastName} {comment.commentatorFirstName}</b></Link> ({comment.commentatorUsername})
          </div>
          <div className="row">
            <div className="col">
              <div className="text-muted"><FontAwesomeIcon icon={['fa', 'heart']} />&nbsp; <small>{comment.commentatorProjectRole}</small></div>
            </div>
            <div className="col text-right">
              <div className="text-muted"><small><Moment format="MMM Do, yyyy - hh:mm">{comment.commentDate}</Moment></small></div>
            </div>
          </div>
          <p className="comment-box pr-3 pl-3 pt-2 pb-2 mt-2 bg-light text-dark card">{comment.content}</p>
        </div>
      </div> : <div className="media mt-2 ml-5">
        <div className="media-body ml-5">
          <div className="mt-0 text-right">
            <Link to={'/profile?id=' + comment.commentReceiverUsername}><b className="text-dark">{comment.commentReceiverLastName} {comment.commentReceiverFirstName}</b></Link> ({comment.commentReceiverUsername})
          </div>
          <div className="row">
            <div className="col">
              <div className="text-muted"><small><Moment format="MMM Do, yyyy - hh:mm">{comment.commentDate}</Moment></small></div>
            </div>
            <div className="col text-right">
              <div className="text-muted"><FontAwesomeIcon icon={['fa', 'hand-holding-heart']} />&nbsp; <small>{comment.commentReceiverProjectRole}</small></div>
            </div>
          </div>
          <p className="comment-box pr-3 pl-3 pt-2 pb-2 mt-2 bg-light text-dark card">{comment.content}</p>
        </div>
        <img className="user-avatar ml-3" src={process.env.PUBLIC_URL + (comment.isFemale ? '/user-female.png' : '/user.png')} width="48" />
      </div>}
    </Fragment>
  );
}

export default ProfileCommentItem;
