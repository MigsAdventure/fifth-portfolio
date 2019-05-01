import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './components/App';
import NotFound from './components/NotFound';
import * as serviceWorker from './serviceWorker';

const Index = () => (
  <BrowserRouter basename="/">
    <Switch>
    <Route path={`/:lang?/`} exact component={App} />
    {/*<Route path="/" exact component={App} />*/}
    <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  
);


ReactDOM.render(<Index />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
