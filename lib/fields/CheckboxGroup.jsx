import React from 'react';
import CheckboxInput from './Checkbox';

/**
 * Render a group of checkbox inputs
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function checkboxGroup(props) {
  const {name, value, defaultValue, options, ...otherProps} = props;

  return (
    <div className="checkbox-group">
      {Object.keys(options).map(option => {
        return (
          <CheckboxInput
            {...otherProps}
            key={option} name={name} label={options[option]} value={option}
            checked={typeof value !== 'undefined' ? value.indexOf(option) !== -1 : null}
            defaultChecked={typeof defaultValue !== 'undefined' ? defaultValue.indexOf(option) !== -1 : null}
          />
        );
      })}
    </div>
  );
}

checkboxGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.object.isRequired,
  value: React.PropTypes.array,
  defaultValue: React.PropTypes.array
};
