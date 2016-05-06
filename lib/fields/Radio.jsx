import React from 'react';
import classNames from 'classnames';

/**
 * Render a radio input
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function Radio(props) {
  const {label, ...otherProps} = props;

  const radioClassNames = classNames('radio', {
    'radio--selected': props.checked,
    'radio--disabled': props.disabled
  });

  return (
    <label className={radioClassNames}>
      <input type="radio" className="radio__input" {...otherProps}/> {label}
    </label>
  );
}

Radio.propTypes = {
  className: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool,npm
  disabled: React.PropTypes.bool
};
