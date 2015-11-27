import React from 'react';
import classNames from 'classnames';

export default class Checkbox extends React.Component {

  render() {
    let {label, ...props} = this.props;

    const checkboxClassNames = classNames('checkbox', {
      'checkbox--selected': this.props.checked !== null ? this.props.checked : this.props.defaultChecked  // FIXME - never unselected when value is not set and the user selects a different radio option
    });

    return <div className="checkbox-wrapper">
      <label className={checkboxClassNames}>
        <input type="checkbox" className="checkbox__input" {...props}/> {label}
      </label>
    </div>;
  }

}

Checkbox.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired
};