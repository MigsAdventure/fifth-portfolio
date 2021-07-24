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
import { graphql } from 'gatsby';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    console.log('props: ', props);
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
        <Seo title="Migs Home Page" />
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
              text={getCookie('visited') ? this.props.data.strapiBitmoji.firstVisit : this.props.data.strapiBitmoji.visited}
              charsPerLine={emoji.charsPerLine['en']}
            />,
            <Header key={2} context={this.props.pageContext}/>,
            // <About key={3} context={this.props.pageContext}/>,
            // <Projects key={4} context={this.props.pageContext}/>,
            // <Contact key={5} context={this.props.pageContext}/>,
            // <Footer key={6} context={this.props.pageContext}/>
          ]
        }
      </div>
    );
  }
}

export default IndexPage

export const query = graphql`
  query HomePageQuery($locale: String) {
    strapiBitmoji(locale: {eq: $locale}) {
      id
      firstVisit
    }
  }`;
