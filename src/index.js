import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route, Redirect, Switch, StaticRouter } from 'react-router-dom';
import App from './components/App';
import NotFound from './components/NotFound';
import * as serviceWorker from './serviceWorker';

const userRedirect = () => {
  return window.location.pathname.match(/(\/)$/);
};

const Index = () => (
  <HashRouter basename="/">
    {
      userRedirect() && <Redirect to="/en"/>
    }
    <Switch>
      <Route exact path={`/:lang(en|es|jp|kr)`}  component={App} />
      <Route exact path='*' component={NotFound} />
    </Switch>
  </HashRouter>
);

ReactDOM.render(<Index />, document.getElementById('app'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
