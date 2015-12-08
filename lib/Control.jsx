import React from 'react';
import classNames from 'classnames';

import Select from '././fields/Select';
import RadioGroup from './fields/RadioGroup';
import Checkbox from './fields/Checkbox';
import CheckboxGroup from './fields/CheckboxGroup';

export default class Control extends React.Component {

  render() {
    const {label, help, error, valid, validated, children, ...props} = this.props;

    const controlClasses = classNames('control', {
      'control--valid': validated && valid,
      'control--invalid': validated && !valid,
      [`control--${props.name}`]: props.name
    });

    //noinspection Eslint
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

        <label className="control__label label">
          {label}
        </label>

        {help
          ? <span className="control__help">{help}</span>
          : null
        }

        <div className={controlInputClasses}>
          {children
            ? React.cloneElement(children, props)
            : null
          }

          {validated
            ? <i className={controlAlertClasses}></i>
            : null
          }
        </div>

        {error
          ? <div className="control__message">
              <p className="control__message-text">{error}</p>
            </div>
          : null
        }

      </div>
    );
  }

}

Control.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  help: React.PropTypes.string,
  error: React.PropTypes.string,
  valid: React.PropTypes.bool,
  validated: React.PropTypes.bool,
  children: React.PropTypes.element.isRequired
};

Control.defaultProps = {
  name: '',
  label: '',
  help: '',
  error: '',
  valid: false,
  validated: false
};
