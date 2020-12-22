import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact comnponent={Dashboard} />
    <Route path="/repository" comnponent={Repository} />
  </Switch>
);

export default Routes;
