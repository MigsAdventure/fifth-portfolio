import React from 'react';
import PropTypes from 'prop-types';
import './loader.scss';
import classnames from 'classnames';
import SpringScale from "../../_animations/SpringScale";

const Loader = ({
  isVisible,
  icon,
  fullBG,
  text
}) => {
  return (
    isVisible &&
    <div className={classnames('loader', {'full-bg': fullBG})}>
      <div className='inner-loader'>
        <SpringScale scale={{start: 3, end: 0.1}} duration={2300}>
        {
          icon ? <img className='loader-icon' src={require(`../../../${icon}`)} alt="loader-icon" /> : <i className="fas fa-circle-notch"></i>
        }
        {
          text && <h2>{text}</h2>
        }
        </SpringScale>
      </div>
    </div>
    );
};

Loader.defaultProps = {
  isVisible: false,
};

Loader.propTypes = {
  isVisible: PropTypes.bool,
};

export default Loader;
