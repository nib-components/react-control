import React from 'react';
import classNames from 'classnames';

/**
 * Render a text input
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function Text(props) {
  const {className} = props;

  const inputClassNames = classNames('textbox', {
    'textbox--disabled': props.disabled
  }, className);

  return (
    <input className={inputClassNames} {...props}/>
  );
}

Text.propTypes = {
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool
};
