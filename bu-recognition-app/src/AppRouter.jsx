import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Layout
import AdminLayout from './pages/layouts/AdminLayout';
import MainLayout from './pages/layouts/MainLayout';

// Main
import Home from './pages/Home';
import Profile from './pages/Profile';

// Others
import Auth from './pages/Auth';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in" exact>
          <Auth />
        </Route>
        <Route path="/admin/:path?" exact>
          <AdminLayout>

          </AdminLayout>
        </Route>
        <Route>
          <MainLayout>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/profile' component={Profile} />
            </Switch>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
