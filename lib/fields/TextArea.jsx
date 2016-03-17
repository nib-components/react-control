import React from 'react';
import classNames from 'classnames';

/**
 * Render a textarea input
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function TextArea(props) {
  const {className} = props;
  return (
    <textarea className={classNames('textarea', className)} {...props}/>
  );
}

TextArea.propTypes = {
  className: React.PropTypes.string
};
