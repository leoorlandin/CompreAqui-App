import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Create from './pages/Create';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/create" component={Create} />
    </BrowserRouter>
  );
};

export default Routes;