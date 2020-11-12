import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Create from './pages/Create';
import Product from './pages/Product';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/create" component={Create} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;