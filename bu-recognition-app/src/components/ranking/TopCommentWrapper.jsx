import React, { Fragment, useState, useEffect } from 'react';
import { commentApi } from '../../apis/comment.api';
import TopCommentTable from './TopCommentTable';

const TopCommentWrapper = (props) => {
  const { userId } = props;
  const [topFans, setTopFans] = useState([]);
  const [topRecognitions, setTopRecognitions] = useState([]);

  useEffect(() => {
    commentApi.findTop(userId).then(res => {
      setTopFans(res.topFan);
      setTopRecognitions(res.topRecognized);
    });
  }, [userId])

  return (
    <Fragment>
      <div className="wrapper">
        <div className="row">
          <div className="col">
            <TopCommentTable icon={'heart'} title={'Top Fan'} data={topFans} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TopCommentTable icon={'hand-holding-heart'} title={'Top Recognized'} data={topRecognitions} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TopCommentWrapper;
