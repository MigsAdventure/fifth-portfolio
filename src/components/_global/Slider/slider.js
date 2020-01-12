import React from 'react';
import PropTypes from 'prop-types';
import './slider.scss';

const Slider = ({
  image,
  text
}) => {
  return (
    <div className='slider'>
      <div className='inner'>
          <img className='loader-icon' src={require(`../../../${image}`)} alt="Slider" />
      </div>
    </div>
    );
};

Slider.defaultProps = {
  isVisible: false,
};

Slider.propTypes = {
  isVisible: PropTypes.bool,
};

export default Slider;
