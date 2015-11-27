import React from 'react';
import invariant from 'invariant';
import classNames from 'classnames';

import Text from '../fields/Text';
import Select from './../fields/Select';
import RadioGroup from '../fields/RadioGroup';
import Checkbox from '../fields/Checkbox';
import CheckboxGroup from '../fields/CheckboxGroup';

export default class Control extends React.Component {

  render() {
    let {label, help, error, valid, validated, children, ...props} = this.props;

    invariant(
      React.Children.count(children) === 1,
      'A control must have a single input.'
    );

    let controlClasses = classNames('control', {
      'control--valid': validated && valid,
      'control--invalid': validated && !valid,
      [`control--${props.name}`]: props.name
    });

    //noinspection Eslint
    let controlInputClasses = classNames('control__input', {
      'control__input--shrink': children && (children.type === RadioGroup || children.type === Select || children.type === Checkbox)
    });

    let controlAlertClasses = classNames('control__alert', 'v2-icon', 'v2-icon--smallest', {
      'v2-icon--tick': valid,
      'v2-icon--warning-inverse': !valid,
      'control__alert--outside': children && (children.type === RadioGroup || children.type === Select),
      'control__alert--checkbox': children.type === CheckboxGroup || children.type === Checkbox,
    });

    return <div className={controlClasses}>

      <label className="control__label label">
        {label}
      </label>

      {help ?
        <span className="control__help">{help}</span> :
        null
      }

      <div className={controlInputClasses}>
        {children ?
          React.cloneElement(children, props) :
          null
        }
        {validated ?
          <i className={controlAlertClasses}></i> :
          null
        }
      </div>

      {error ?
        <div className="control__message">
          <p className="control__message-text">{error}</p>
        </div> :
        null
      }

    </div>;
  }

}

Control.propTypes = {
  label: React.PropTypes.string.isRequired,
  help: React.PropTypes.string,
  error: React.PropTypes.string,
  valid: React.PropTypes.bool,
  validated: React.PropTypes.bool
};

Control.defaultProps = {
  label: '',
  help: '',
  error: '',
  valid: false,
  validated: false
};
