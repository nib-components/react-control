import React from 'react';
import classNames from 'classnames';

/**
 * Render a textarea input
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function TextArea(props) {
  const {className} = props;

  const inputClassNames = classNames('textarea', {
    'textarea--disabled': props.disabled
  }, className);

  return (
    <textarea className={inputClassNames} {...props}/>
  );
}

TextArea.propTypes = {
  className: React.PropTypes.string
};
