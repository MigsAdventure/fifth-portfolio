import React from 'react';
import PropTypes from 'prop-types';
import './popup-box.scss';

const PopupBox = ({
  isVisible,
  text,
  closeCB
}) => {
  return (
    isVisible &&
    <div className="popup-box">
      <div className='inner-wrapper'>
        <div
          className='window-close'
          onClick={(e) => closeCB(e)}
        >
          <i className="fas fa-times" aria-hidden="true"></i>
        </div>
        <div className='text-wrapper'>
          <h1>{text}</h1>
        </div>
      </div>
    </div>
    );
};

PopupBox.defaultProps = {
  isVisible: false,
  text: "",
};

PopupBox.propTypes = {
  isVisible: PropTypes.bool,
  text: PropTypes.string,
  closeCB: PropTypes.func
};

export default PopupBox;
