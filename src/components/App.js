import React, { Component } from 'react';
import {withRouter, Route, BrowserRouter, Redirect} from 'react-router-dom';
import '../styles/base.scss';
import Header from '../components/Header';

class App extends Component {
  constructor () {
    super();
    const lang = window.location.pathname.substring(1, 3);
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default withRouter(App);
