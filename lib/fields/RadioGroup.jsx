import React from 'react';
import RadioInput from './Radio';

export default class RadioGroup extends React.Component {

  handleBlur(onBlur, value) {
    onBlur({
      target: {
        value
      }
    });
  }

  render() {

    let {name, options, onBlur, value: selectedValue, ...props} = this.props;

    return <div className="radio-group">
      {Object.keys(options).map(optionValue => {
        return <RadioInput key={optionValue} name={name} value={optionValue} label={options[optionValue]} onBlur={() => {this.handleBlur(onBlur, selectedValue)}}/>;
      })}
    </div>;

  }

}

RadioGroup.defaultProps = {
  onBlur: function() {}
};

RadioGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.object.isRequired,
  onBlur: React.PropTypes.func
};