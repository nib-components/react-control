import React from 'react';
import classNames from 'classnames';

/**
 * Render a checkbox input
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function Checkbox(props) {
  const {className, label, ...otherProps} = props;

  const checkboxClassNames = classNames('checkbox', {
    'checkbox--selected': props.checked,
    'checkbox--disabled': props.disabled
  }, className);

  return (
    <div className="checkbox-wrapper">
      <label className={checkboxClassNames}>
        <input type="checkbox" className="checkbox__input" {...otherProps}/> {label}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  className: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool
};
