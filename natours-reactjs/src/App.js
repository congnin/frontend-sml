import React, { Suspense } from 'react';
import './App.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from 'components/Footer';

import Header from 'components/Header';

import RouteEnum from 'constants/RouteEnum';
import LoggedInRoute from 'routing/LoggedInRoute';

const AllToursPage = React.lazy(() => {
  return import('pages/AllToursPage');
});
const LoginPage = React.lazy(() => {
  return import('pages/LoginPage');
});
const TourDetailPage = React.lazy(() => {
  return import('pages/TourDetailPage');
});
const AccountPage = React.lazy(() => {
  return import('pages/private/AccountPage');
});

const NotFound = React.lazy(() => {
  return import('pages/NotFound');
});

function App(props) {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Route path={RouteEnum.Home} exact component={AllToursPage} />
          <LoggedInRoute path={RouteEnum.Login} exact component={LoginPage} />
          <Route path={RouteEnum.Tour} component={TourDetailPage} />

          <Route path={RouteEnum.Me} component={AccountPage} />
          <Route path={RouteEnum.NotFound} component={NotFound} />
          <Redirect to={RouteEnum.NotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
