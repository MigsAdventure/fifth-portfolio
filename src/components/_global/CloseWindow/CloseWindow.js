import React from 'react';
import PropTypes from 'prop-types';
import './close-window.scss';

const CloseWindow = ({
                       onClick,
                       icon,
                       text
                     }) => {
  return (
    <div
      className='window-close'
      onClick={(e) => onClick(e)}
    >
      {
        icon && <i className={`icon ${icon}`} aria-hidden="true"/>
      }
      {
        text && <p className='text'>{text}</p>
      }
    </div>
  );
};

CloseWindow.defaultProps = {
  icon: 'fas fa-times',
  text: '',
};

CloseWindow.propTypes = {
  text: PropTypes.string,
  closeCB: PropTypes.func
};

export default CloseWindow;
