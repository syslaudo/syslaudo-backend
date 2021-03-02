import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import { GlobalStyle } from './style/base';

function App() {
  return (
  <React.Fragment>
    <GlobalStyle />
    <Navbar />
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
