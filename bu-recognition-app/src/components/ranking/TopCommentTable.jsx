import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopCommentItem from './TopCommentItem';

const TopCommentTable = (props) => {
  const { icon, title, data } = props;

  return (
    <Fragment>
      <div className="p-3 mb-3">
        <h5 className="text-warning profile-name mt-3"><strong><FontAwesomeIcon icon={['fa', icon]} />&nbsp; {title}</strong></h5>
        <hr className="divider bg-warning mt-3" />
        <div className="row">
          <div className="col">
          {data.map((value, key) => {
            return <TopCommentItem key={key} value={value} icon={icon} />
          })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TopCommentTable;
