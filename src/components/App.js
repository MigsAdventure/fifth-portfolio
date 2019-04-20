import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';

import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default withRouter(App);
