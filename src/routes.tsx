import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from '~/pages/Index';
import NotFound from '~/pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Index} />

    <Route component={NotFound} />
  </Switch>
);

export default Routes;
