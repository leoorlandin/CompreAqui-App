import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Create from './pages/Create';
import Show from './pages/Show';
import Edit from './pages/Edit';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/create" component={Create} />
        <Route path="/product/:id" exact component={Show} />
        <Route path="/product/:id/edit" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;