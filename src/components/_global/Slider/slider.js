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
    const { image, text, charsPerLine } = this.props;
    const { isVisible } = this.state;
    return (
        isVisible && <div className='slider' onClick={this.closeSlider}>
        <div className='inner'>
          <img className='image' src={require(`../../../${image}`)} alt="Slider" />
          <div className='chat-box'>
            <div className='close'><i className='fa fa-times' aria-hidden="true"/></div>
            {
              text.map((item, i) => {
                return [<p key={i} className='text'>{item}</p>]
              })
            }
            {/*  /!*TODO Refactor this section*!/*/}
            <div className="hidden">
              {
                text.map((item, i) => {
                  const numLines = Math.ceil(item.length / charsPerLine);
                  let renderItems = [];
                  for (let x = 1; x <= numLines; x++) {
                    renderItems.push(<p key={Math.random()}>&nbsp;</p>)
                  }
                  return renderItems;
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Slider.defaultProps = {
  text: ['Hi there!'],
};

Slider.propTypes = {
  text: PropTypes.array,
};

export default Slider;
