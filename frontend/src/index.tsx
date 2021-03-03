import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body'
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import { GlobalStyle } from './style/base';
import Footer from './components/Footer';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <Navbar />
      <Body>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Body>
      <Footer />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);
