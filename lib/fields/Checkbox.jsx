import React from 'react';
import classNames from 'classnames';

/**
 * Render a checkbox input
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function checkbox(props) {
  const {label, ...otherProps} = props;

  const checkboxClassNames = classNames('checkbox', {
    'checkbox--selected': props.checked
  });

  return (
    <div className="checkbox-wrapper">
      <label className={checkboxClassNames}>
        <input type="checkbox" className="checkbox__input" {...otherProps}/> {label}
      </label>
    </div>
  );
}

checkbox.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool
};
