import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RecentCommentItem = (props) => {
  const { comment, bg, color } = props;

  return (
    <Fragment>
      <div className='media mt-3'>
        <img
          className='user-avatar mr-3'
          src={
            process.env.PUBLIC_URL +
            (comment.isFemale ? '/user-female.png' : '/user.png')
          }
          width='48'
        />
        <div className='media-body'>
          <div className='mt-0'>
            <span className='text-danger'>
              <FontAwesomeIcon icon={['fa', 'heart']} />
            </span>
            &nbsp;{' '}
            <Link to={'/profile?id=' + comment.username}>
              <b className='text-white'>
                {comment.lastName} {comment.firstName}
              </b>
            </Link>{' '}
            ({comment.username})
          </div>
          <div className='row'>
            <div className='col'>
              <div className='text-muted'>
                <small>{comment.projectName}</small>
              </div>
            </div>
            <div className='col text-right'>
              <div className='text-muted'>
                <small>
                  <Moment format='MMM Do, yyyy - hh:mm'>
                    {comment.commentDate}
                  </Moment>
                </small>
              </div>
            </div>
          </div>
          <div>
            <div
              className={
                'rounded pr-3 pl-3 pt-2 pb-2 mt-2 bg-' + bg + ' text-' + color
              }
            >
              {comment.content}
            </div>
            <div className='text-right'>
              <small>
                from{' '}
                <Link to={'/profile?id=' + comment.commentatorUsername}>
                  <b className='text-white'>
                    {comment.commentatorLastName} {comment.commentatorFirstName}
                  </b>
                </Link>{' '}
                ({comment.commentatorUsername})<b className='text-info'></b>
              </small>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RecentCommentItem;
