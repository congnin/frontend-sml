import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import RouteEnum from 'constants/RouteEnum';

function LoggedInRoute(props) {
  const { component: Component, user, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) =>
        user.loggedIn ? (
          <Redirect to={{ pathname: RouteEnum.Home }} />
        ) : (
          <Component {...props} {...rest} />
        )
      }
    />
  );
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(LoggedInRoute);
