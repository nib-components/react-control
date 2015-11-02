import React from 'react';
import RadioInput from './RadioInput';

export default class RadioGroup extends React.Component {

  render() {

    let {name, options, ...props} = this.props;

    return <div className="radio-group">
      {Object.keys(options).map(value => {
        return <RadioInput key={value} name={name} value={value} label={options[value]}/>;
      })}
    </div>;

  }

}

RadioGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.object.isRequired
};