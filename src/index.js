import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import 'core-js/features/array/includes';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './components/App';
import NotFound from './components/NotFound';
import * as serviceWorker from './serviceWorker';

const userRedirect = () => {
  return window.location.pathname.match(/(\/|index.html)$/);
};

const userLang = () => {
  const languages = {
    en: "en",
    es: "es",
    ja: "jp",
    ko: "kr"
  };
  const currLang = (window.navigator.userLanguage && window.navigator.userLanguage.slice(0, 2)) || (window.navigator.language && window.navigator.language.slice(0, 2));
  return languages[currLang] ?  languages[currLang] : "en";
};

const Index = () => (
  <BrowserRouter basename="/">
    {
      userRedirect() && <Redirect to={userLang()}/>
    }
    <Switch>
      <Route exact path={`/:lang(en|es|jp|kr)`}  component={App} />
      <Route exact path='*' component={NotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Index />, document.getElementById('app'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
