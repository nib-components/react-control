import React from 'react';

export default class RadioInput extends React.Component {

  render() {
    let {label, ...props} = this.props;

    return <label className="radio">
      <input type="radio" className="radio__input" {...props}/> {label}
    </label>;
  }

}

RadioInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired
};