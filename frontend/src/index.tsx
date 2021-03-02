import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import { GlobalStyle } from './style/base';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);
