import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import { GlobalStyle } from './style/base';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);
