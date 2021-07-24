import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './slider.scss';

class Slider extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isVisible: true
    };
    this.closeSlider = this.closeSlider.bind(this);
  }
  
  closeSlider() {
    this.setState({
      isVisible: false
    })
  }
  
  
  
  render() {
    const { image, text, charsPerLine, gatsby } = this.props;
    const { isVisible } = this.state;
    const textArr = text.split("\n") ? text.split("\n") : [text];
    console.log('textArr: ', textArr);
    return (
        isVisible && <a className='slider' onClick={this.closeSlider}>
        <div className='inner'>
          {
            gatsby ?
            <img className='image' src={`${image}`} alt="Slider" />
            :
            <img className='image' src={require(`${image}`)} alt="Slider" />
          }
          <div className='chat-box'>
            <div className='close'><i className='fa fa-times' aria-hidden="true"/></div>
            {
              textArr.map((item, i) => {
                return [<p key={i} className='text'>{item}</p>]
              })
            }
            {/*  /!*TODO Refactor this section*!/*/}
            <div className="hidden">
              {
                (() => {
                  console.log('text: ', text);
                  console.log('text.length: ', text.length / charsPerLine);
                  const numLines = Math.ceil(text.length / charsPerLine);
                  let renderItems = [];
                  for (let x = 0; x <= numLines; x++) {
                    renderItems.push(<p key={Math.random()}>&nbsp;</p>)
                  }
                  return renderItems;
                })()
              }
            </div>
          </div>
        </div>
      </a>
    );
  }
}

Slider.defaultProps = {
  text: 'Hi there!',
};

Slider.propTypes = {
  text: PropTypes.array,
};

export default Slider;
