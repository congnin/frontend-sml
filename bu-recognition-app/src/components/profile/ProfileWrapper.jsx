import React, { Fragment, useState, useEffect } from 'react';
import Moment from 'react-moment';

import { userApi } from '../../apis/user.api';

const ProfileWrapper = (props) => {
  const { userId } = props;
  const [user, setUser] = useState({});

  useEffect(() => {
    userApi.get(userId).then(res => {
      setUser(res)
    });
  }, [userId]);

  return (
    <Fragment>
      <div className="wrapper">
        <div className="row">
          <div className="col">
            <div className="p-3 mb-3">
              <p className="mt-3 text-center"><img className="user-avatar" src={process.env.PUBLIC_URL + (user.isFemale ? '/user-female.png' : '/user.png')} width="160" /></p>
              <h5 className="text-info"><strong>{user.lastName} {user.firstName}</strong></h5>
              <div className="text-light mb-3"><small>{user.projectRole ? user.projectRole : 'TBA'}</small></div>
              <hr className="divider bg-info" />
              <div className="mt-2 text-white-50"><small><b>Company Email</b></small></div>
              <div>{user.username}@fsoft.com.vn</div>
              <div className="mt-2 text-white-50"><small><b>Joined FSOFT at</b></small></div>
              <div>{user.joinedAt ? <Moment format="MMM Do, yyyy">{user.joinedAt}</Moment> : 'TBA'}</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProfileWrapper;
