import React from 'react';
import RadioInput from './Radio';

//FIXME - the radio is never unselected when user selects a different radio
// => need to maintain state if we're going to make it work without it being hooked up :(

/**
 * Render a group of radio inputs
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function radioGroup(props) {
  const {name, value, defaultValue, options, ...otherProps} = props;

  return (
    <div className="radio-group">
      {Object.keys(options).map(option => (
        <RadioInput
          {...otherProps}
          key={option}
          name={name} value={option} label={options[option]}
          checked={typeof value !== 'undefined' ? option === value : null}
          defaultChecked={option === defaultValue}
        />
      ))}
    </div>
  );
}

radioGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.object.isRequired,
  value: React.PropTypes.string,
  defaultValue: React.PropTypes.string
};
