import React, { Component } from 'react';
import {withRouter, Route, BrowserRouter, Redirect} from 'react-router-dom';
import '../styles/base.scss';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
const lang = window.location.pathname.substring(1, 3) || 'en';

class App extends Component {
  constructor () {
    super();
    // defaults lang to en if there is no lang match
  }
  

  render() {
    return (
      <div className="App">
        <Header lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
        <Footer lang={lang} />
      </div>
    );
  }
}

export default withRouter(App);
