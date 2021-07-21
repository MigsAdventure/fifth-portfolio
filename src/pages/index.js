import React, {Component} from "react"
import Seo from "../components/seo"
import Loader from "../components/_global/Loader";
import Slider from "../components/_global/Slider";
import { setCookie, getCookie } from "../utils/cookie";
import { emoji } from "../constants/data/global";
import emojiImage from '../assets/images/global/hi-bitmoji.png';
import subiIcon from '../assets/images/global/subi2.gif';
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

class IndexPage extends Component {
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
    return (
      <div className="App">
        <Loader
          icon={subiIcon}
          fullBG={true}
          isVisible={!this.state.loaded}
        />
        {
          this.state.loaded && [
            <Slider
              gatsby={true}
              key={1}
              image={emojiImage}
              text={getCookie('visited') ? emoji.visited['en'] : emoji.firstVisit['en']}
              charsPerLine={emoji.charsPerLine['en']}
            />,
            <Header key={2} lang={"en"}/>,
            <About key={3} lang={"en"}/>,
            <Projects key={4} lang={"en"}/>,
            <Contact key={5} lang={"en"}/>,
            <Footer key={6} lang={"en"}/>
          ]
        }
      </div>
    );
  }
}

export default IndexPage
