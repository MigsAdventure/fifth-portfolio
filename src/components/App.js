import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/base.scss';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import About from "./About";
import Loader from "./_global/Loader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    // this.setState({loaded: true})
  }
  
  render() {
    // defaults lang to en if there is no lang match
    const langRegex = /en\b|kr\b|jp\b|es\b/;
    const params_lang = this.props.match.params.lang;
    const lang = (params_lang && params_lang.match(langRegex) && params_lang) || 'en';
    return (
      <div className="App">
        <Loader isVisible={!this.state.loaded} />
        <Header lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
        <Footer lang={lang} />
      </div>
    );
  }
}

export default withRouter(App);
