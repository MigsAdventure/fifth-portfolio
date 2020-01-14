import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/base.scss';
import { emoji } from "../constants/data/global";
import { getCookie, setCookie } from "../utils/cookie";

import Header from '../components/Header';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import About from "./About";
import Loader from "./_global/Loader";
import Slider from "./_global/Slider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }
  
  componentDidMount() {
    if (!this.state.loaded) {
      setTimeout(() => {
        this.setState({
          loaded: true
        }, () => {
          setCookie('visited', true);
        })
      }, 2500);
    }
  }
  
  render() {
    // defaults lang to en if there is no lang match
    const langRegex = /en\b|kr\b|jp\b|es\b/;
    const params_lang = this.props.match.params.lang;
    const lang = (params_lang && params_lang.match(langRegex) && params_lang) || 'en';
    console.log('cookie is here: ', getCookie('visited'));
    return (
      <div className="App">
        <Loader icon={'assets/images/global/subi2.gif'} fullBG={true} isVisible={!this.state.loaded} />
        <Slider
          image={'assets/images/global/hi-bitmoji.png'}
          text={getCookie('visited') ? emoji.visited[lang] : emoji.firstVisit[lang]}
        />
        <Header lang={lang}/>
        <About lang={lang}/>
        <Projects lang={lang}/>
        <Contact lang={lang}/>
        <Footer lang={lang}/>
      </div>
    );
  }
}

export default withRouter(App);
