import React from 'react';
import classNames from 'classnames';
import CheckboxInput from './Checkbox';

/**
 * Render a group of checkbox inputs
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function CheckboxGroup(props) {
  const {className, name, value, defaultValue, options, ...otherProps} = props;

  const checkboxGroupClassNames = classNames('checkbox-group', {
    'checkbox-group--disabled': props.disabled
  }, className);

  return (
    <div className={checkboxGroupClassNames}>
      {Object.keys(options).map(option => {

        let checked = null;
        if (typeof value !== 'undefined') {
          checked = value.indexOf(option) !== -1;
        } else if (typeof defaultValue !== 'undefined') {
          checked = defaultValue.indexOf(option) !== -1;
        }

        return (
          <CheckboxInput
            {...otherProps}
            key={option}
            name={name} value={option} checked={checked}
            label={options[option]}
          />
        );

      })}
    </div>
  );
}

CheckboxGroup.propTypes = {
  className: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.object.isRequired,
  value: React.PropTypes.array,
  defaultValue: React.PropTypes.array
};
