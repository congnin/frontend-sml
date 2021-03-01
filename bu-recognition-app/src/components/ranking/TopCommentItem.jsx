import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopCommentItem = (props) => {
  const { value, icon } = props;

  return (
    <Fragment>
      <div className="media mt-0">
        <img className="user-avatar mr-3 mt-2" src={process.env.PUBLIC_URL + (value.isFemale ? '/user-female.png' : '/user.png')} width="48" />
        {value.username ?
        <Fragment>
          <div className="media-body">
            <div className="user-name mt-0">
              <Link to={'/profile?id=' + value.username}><b className="text-light">{value.lastName} {value.firstName}</b></Link> <span>({value.username})</span>
            </div>
            <div className="text-muted"><small>{value.projectRole ? value.projectRole : 'TBA'}</small> - <small><b className="text-info">{value.projectName}</b></small></div>
            <div><small><FontAwesomeIcon icon={['fa', icon]} />&nbsp; {value.noOfLikes}</small></div>
          </div>
        </Fragment>
         : null}
      </div>
    </Fragment>
  );
}

export default TopCommentItem;
