import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './button.scss';

const Button = ({
  text,
  type,
  large,
  isExternal,
  url,
  isActive,
  callback,
  arrow, 
  externalNewTab
}) => {
  let content = null;
  let buttonClass = classnames({
    'btn': true,
    [type]: (type),
    'active': (isActive),
    'large': (large)
  });

  const renderArrow = () => {
    return <i className={classnames('btn-arrow','fas',`fa-arrow-${arrow}`)} />;
  };

  if (isExternal) {
    content = (
      <a className={classnames(buttonClass, `arrow-${arrow}`)} href={url} target={externalNewTab ? "_blank" : "_self"}>
        { arrow && arrow === 'left' && renderArrow() }
        {text}
        { arrow && arrow !== 'left' && renderArrow() }
      </a>
    )
  } else {
    content = (
      <div data-nchide
        className={classnames(
          buttonClass,
          `arrow-${arrow}`,
          { ['no-url']: !url }
        )}
        onClick={(callback) ? (e) => {callback(e)} : () => {return false}}
      >
        { arrow && arrow === 'left' && renderArrow() }
        {
          (url) ? <Link to={url}>{text}</Link> : text
        }
        { arrow && arrow !== 'left' && renderArrow() }
      </div>
    )
  }
  return content;
};

Button.defaultProps = {
  type: '',
  text: 'Go to Site',
  isExternal: false,
  isActive: false,
  large: false,
  arrow: false,
  externalNewTab: true
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  large: PropTypes.bool,
  arrow: PropTypes.oneOf(['up', 'down', 'right', 'left', false]),
  url: PropTypes.string,
  isExternal: PropTypes.bool,
  isActive: PropTypes.bool,
  callback: PropTypes.func,
  externalNewTab: PropTypes.bool
};

export default Button;
