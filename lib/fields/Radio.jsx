import React from 'react';
import classNames from 'classnames';

export default class RadioInput extends React.Component {

  render() {
    const {label, ...props} = this.props;

    //FIXME - never unselected when value is not set and the user selects a different radio option
    const checked = this.props.checked !== null ? this.props.checked : this.props.defaultChecked;

    const radioClassNames = classNames('radio', {
      'radio--selected': checked
    });

    return (
      <label className={radioClassNames}>
        <input type="radio" className="radio__input" {...props}/> {label}
      </label>
    );
  }

}

RadioInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool,
  defaultChecked: React.PropTypes.bool
};
