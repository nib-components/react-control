import React from 'react';
import CheckboxInput from './Checkbox';

export default class CheckboxGroup extends React.Component {

  render() {

    const {name, value, defaultValue, options, ...props} = this.props;

    return (
      <div className="checkbox-group">
        {Object.keys(options).map(option => (
            <CheckboxInput
              {...props}
              key={option} name={name} label={options[option]} value={option}
              checked={value ? value.indexOf(option) !== -1 : null}
              defaultChecked={defaultValue ? defaultValue.indexOf(option) !== -1 : null}
            />
        ))}
      </div>
    );

  }

}

CheckboxGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.object.isRequired,
  value: React.PropTypes.string,
  defaultValue: React.PropTypes.string
};
