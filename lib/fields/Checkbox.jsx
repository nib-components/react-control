import React from 'react';
import classNames from 'classnames';

export default class Checkbox extends React.Component {

  render() {
    const {label, ...props} = this.props;

    //FIXME - never unselected when value is not set and the user selects a different radio option
    const checked = this.props.checked !== null ? this.props.checked : this.props.defaultChecked;

    const checkboxClassNames = classNames('checkbox', {
      'checkbox--selected': checked
    });

    return (
      <div className="checkbox-wrapper">
        <label className={checkboxClassNames}>
          <input type="checkbox" className="checkbox__input" {...props}/> {label}
        </label>
      </div>
    );
  }

}

Checkbox.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool,
  defaultChecked: React.PropTypes.bool
};
