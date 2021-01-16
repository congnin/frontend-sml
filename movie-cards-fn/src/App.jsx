import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import Navigation from './components/Navigation';
import { Redirect, Route, Switch } from 'react-router-dom';
import UpcomingMovies from './containers/UpcomingMovies';
import PopularMovies from './containers/PopularMovies';
import SearchMovies from './containers/SearchMovies';
import FavoriteMovies from './containers/FavoriteMovies';
import DetailMovie from './containers/DetailMovie';

App.propTypes = {};

function App(props) {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Redirect exact from='/' to='/popular' />
        <Route exact path='/popular' component={PopularMovies} />
        <Route exact path='/upcoming' component={UpcomingMovies} />
        <Route exact path='/search' component={SearchMovies} />
        <Route exact path='/favorites' component={FavoriteMovies} />
        <Route
          path={[
            '/popular/:id',
            '/upcoming/:id',
            '/search/:id',
            '/favorites/:id',
          ]}
          component={DetailMovie}
        />
      </Switch>
    </React.Fragment>
  );
}

export default App;
