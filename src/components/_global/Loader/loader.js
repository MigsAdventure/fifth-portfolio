import React from 'react';
import PropTypes from 'prop-types';
import './loader.scss';
import classnames from 'classnames';

const Loader = ({
  isVisible,
  icon,
  fullBG
}) => {
  return (
    isVisible &&
    <div className={classnames('loader', {'full-bg': fullBG})}>
      {
       icon ? <img className='loader-icon' src={require(`../../../${icon}`)} alt="loader-icon" /> : <i className="fas fa-circle-notch"></i>
      }
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
