import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';

import Select from '././fields/Select';
import RadioGroup from './fields/RadioGroup';
import Checkbox from './fields/Checkbox';
import CheckboxGroup from './fields/CheckboxGroup';

export default class Control extends React.Component {

  render() {
    const {
      label, help, error, valid, validated, children,

      //redux-formo methods
      initialise, focus, blur, change, filter, validate, //eslint-disable-line

      //redux-formo props
      initialised, active, filtering, filtered, validating, /*validated,*/ lastValidValue, //eslint-disable-line

      ...otherProps
    } = this.props;

    const controlClasses = classNames('control', {
      [`control--${this.props.name}`]: this.props.name,
      'control--disabled': this.props.disabled,
      'control--valid': validated && valid,
      'control--invalid': validated && !valid
    });

    const controlLabelClasses = classNames('control__label', 'label', {
      'label--disabled': this.props.disabled
    });

    const controlInputClasses = classNames('control__input', {
      'control__input--shrink': children && (children.type === RadioGroup || children.type === Select || children.type === Checkbox)
    });

    const controlAlertClasses = classNames('control__alert', 'v2-icon', 'v2-icon--smallest', {
      'v2-icon--tick': valid,
      'v2-icon--warning-inverse': !valid,
      'control__alert--outside': children && (children.type === RadioGroup || children.type === Select),
      'control__alert--checkbox': children.type === CheckboxGroup || children.type === Checkbox
    });

    return (
      <div className={controlClasses}>

        <label className={controlLabelClasses}>
          {label}
        </label>

        {help
        && <span className="control__help">{help}</span>
        }

        <div className={controlInputClasses}>

          {children
          && React.cloneElement(children, otherProps)
          }

          {validated
          && <i className={controlAlertClasses}></i>
          }

        </div>

        <ReactCSSTransitionGroup
          transitionName="control-message"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {error
          && (
            <div className="control__message">
              <p className="control__message-text">{error}</p>
            </div>
          )
          }
        </ReactCSSTransitionGroup>

      </div>
    );
  }

}

Control.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string.isRequired,
  help: React.PropTypes.string,
  error: React.PropTypes.string,
  valid: React.PropTypes.bool,
  validated: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  children: React.PropTypes.element.isRequired
};

Control.defaultProps = {
  help: '',
  error: '',
  valid: false,
  validated: false
};
