import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from '~/pages/LandingPage';
import NotFound from '~/pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />

    <Route component={NotFound} />
  </Switch>
);

export default Routes;
