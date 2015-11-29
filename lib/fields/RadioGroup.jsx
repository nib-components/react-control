import React from 'react';
import RadioInput from './Radio';

export default class RadioGroup extends React.Component {

  render() {

    const {name, value, defaultValue, options, ...props} = this.props;

    return (
      <div className="radio-group">
        {Object.keys(options).map(option => (
          <RadioInput
            {...props}
            key={option} name={name} label={options[option]} value={option}
            checked={value ? option === value : null} defaultChecked={option === defaultValue}
          />
        ))}
      </div>
    );

  }

}

RadioGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.object.isRequired,
  value: React.PropTypes.string,
  defaultValue: React.PropTypes.string
};
