import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Contato from '~/pages/Contato';
import Index from '~/pages/Index';
import NotFound from '~/pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route exact path="/contato" component={Contato} />

    <Route component={NotFound} />
  </Switch>
);

export default Routes;
