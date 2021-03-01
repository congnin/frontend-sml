import React from 'react';
import { HomeProvider } from '../common/context/home-context';

import ProjectWrapper from '../components/project/ProjectWrapper';
import RecentCommentWrapper from '../components/comment/RecentCommentWrapper';
import ProjectUserSearchBar from '../components/project/ProjectUserSearchBar';
import ToTopButton from '../components/navigation/ToTopButton';

const Home = () => {
  return (
    <HomeProvider>
      <div className="page-wrapper page-content-home">
        <div className="bg-white">
          <div className="row">
            <div className="col-sm-6 offset-sm-6">
              <ProjectUserSearchBar />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ProjectWrapper />
            </div>
          </div>
        </div>
        <div className="bg-dark text-white">
          <div className="row fix-mr">
            <div className="col">
              <RecentCommentWrapper />
            </div>
          </div>
        </div>
      </div>
      <ToTopButton />
    </HomeProvider>
  );
}

export default Home;
