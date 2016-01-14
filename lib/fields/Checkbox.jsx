import React from 'react';
import classNames from 'classnames';

/**
 * Render a checkbox input
 * @param   {object} props
 * @returns {ReactElement}
 */
export default class Checkbox extends React.Component {
    
  handleChange(event) {
    this.props.onChange(event.target.checked);
  }  
  
  render() {
    const {label, ...otherProps} = this.props;

    const checkboxClassNames = classNames('checkbox', {
        'checkbox--selected': this.props.checked
    });

    return (
        <div className="checkbox-wrapper">
        <label className={checkboxClassNames}>
            <input type="checkbox" className="checkbox__input" {...otherProps}/> {label}
        </label>
        </div>
    );
  }
}

Checkbox.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool
};
