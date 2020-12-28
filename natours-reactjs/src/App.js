import React, { Suspense } from 'react';
import './App.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from 'components/Footer';

import Header from 'components/Header';

import RouteEnum from 'constants/RouteEnum';

const AllToursPage = React.lazy(() => {
  return import('pages/AllToursPage');
});
const LoginPage = React.lazy(() => {
  return import('pages/LoginPage');
});
const TourDetailPage = React.lazy(() => {
  return import('pages/TourDetailPage');
});

function App(props) {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Redirect exact from="/" to={RouteEnum.Home} />

          <Route path={RouteEnum.Home} exact component={AllToursPage} />
          <Route path={RouteEnum.Login} exact component={LoginPage} />
          <Route path={RouteEnum.Tour} component={TourDetailPage} />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
