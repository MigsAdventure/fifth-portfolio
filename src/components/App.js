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
import FadeInScale from "./_animations/FadeInScale";

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
      }, 2200);
    }
  }
  
  render() {
    // defaults lang to en if there is no lang match
    const langRegex = /en\b|kr\b|jp\b|es\b/;
    const params_lang = this.props.match.params.lang;
    const lang = (params_lang && params_lang.match(langRegex) && params_lang) || 'en';
    return (
      <div className="App">
        <Loader
          icon={'assets/images/global/subi2.gif'}
          fullBG={true}
          isVisible={!this.state.loaded}
        />
        {
          this.state.loaded && [
            <Slider
              key={1}
              image={'assets/images/global/hi-bitmoji.png'}
              text={getCookie('visited') ? emoji.visited[lang] : emoji.firstVisit[lang]}
              charsPerLine={emoji.charsPerLine[lang]}
            />,
            <Header key={2} lang={lang}/>,
            <About key={3} lang={lang}/>,
            <Projects key={4} lang={lang}/>,
            <Contact key={5} lang={lang}/>,
            <Footer key={6} lang={lang}/>
          ]
        }
      </div>
    );
  }
}

export default withRouter(App);
