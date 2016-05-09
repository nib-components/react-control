import React from 'react';
import classNames from 'classnames';

/**
 * Render a text input
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function Password(props) {
  const {className} = props;

  const inputClassNames = classNames('textbox', {
    'textbox--disabled': props.disabled
  }, className);

  return (
    <input type="password" className={inputClassNames} {...props}/>
  );
}

Password.propTypes = {
  className: React.PropTypes.string
};
