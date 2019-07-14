import React from 'react';
import PropTypes from 'prop-types';
import './loader.scss';

const Loader = ({
  isVisible,
  icon
}) => {
  return (
    isVisible &&
    <div className='loader'><i className="fas fa-circle-notch"></i></div>
    );
};

Loader.defaultProps = {
  isVisible: false,
};

Loader.propTypes = {
  isVisible: PropTypes.bool,
};

export default Loader;
