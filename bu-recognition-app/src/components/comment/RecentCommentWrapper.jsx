import React, { Fragment, useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HomeContext } from '../../common/context/home-context';
import { commentApi } from '../../apis/comment.api';

import RecentCommentItem from './RecentCommentItem';

const RecentCommentWrapper = () => {
  const { state } = useContext(HomeContext);
  const [recentComments, setRecentComments] = useState([]);

  useEffect(() => {
    commentApi.findRecent().then(res => {
      setRecentComments(res);
    });
  }, [state.toggleReaction])

  return (
    <Fragment>
      <div className="wrapper">
        <div className="p-3">
          <h5 className="text-white mt-3"><strong><FontAwesomeIcon icon={['fa', 'heart']} />&nbsp; Recent Recognitions</strong></h5>
          <hr className="divider bg-info mt-3" />
          <div className="row">
            <div className="col">
            {recentComments.map((value, key) => {
              return <Fragment key={key}>
                <RecentCommentItem comment={value} bg={'light'} color={'dark'} />
                {key === recentComments.length - 1 ? null : <hr />}
              </Fragment>
            })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default RecentCommentWrapper;
