import React from 'react';
import classNames from 'classnames';

/**
 * Render a text input
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function Text(props) {
  const {className} = props;
  return (
    <input className={classNames('textbox', className)} {...props}/>
  );
}

Text.propTypes = {
  className: React.PropTypes.string
};
