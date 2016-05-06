import React from 'react';
import classNames from 'classnames';

/**
 * Render a text input
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function Password(props) {
  const {className} = props;
  return (
    <input type="password" className={classNames('textbox', className)} {...props}/>
  );
}

Password.propTypes = {
  className: React.PropTypes.string
};
