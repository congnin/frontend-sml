import React from 'react';
import { useLocation } from 'react-router-dom';
import { userApi } from '../apis/user.api';
import { ProfileProvider } from '../common/context/profile-context';
import ProfileCommentWrapper from '../components/profile-comment/ProfileCommentWrapper';

import ProfileWrapper from '../components/profile/ProfileWrapper';
import TopCommentWrapper from '../components/ranking/TopCommentWrapper';

const Profile = () => {
  let query = new URLSearchParams(useLocation().search);
  const userId = query.get('id');

  return (
    <ProfileProvider>
      <div className="page-wrapper page-content-profile">
        <div className="bg-dark text-white">
          <div className="row">
            <div className="col">
              <ProfileWrapper userId={userId} />
            </div>
          </div>
        </div>
        <div className="bg-white text-dark">
          <div className="row">
            <div className="col">
              <ProfileCommentWrapper userId={userId} />
            </div>
          </div>
        </div>
        <div className="bg-dark text-white">
          <div className="row fix-mr">
            <div className="col">
              <TopCommentWrapper userId={userId} />
            </div>
          </div>
        </div>
      </div>
    </ProfileProvider>
  );
}

export default Profile;
