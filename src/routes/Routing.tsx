import Home from 'store/components/home/Home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routing = () => (
  <Router>
    <div className="app-wrap">
      <div id="app-page">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default Routing;
