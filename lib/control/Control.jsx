import React from 'react';
import invariant from 'invariant';
import classNames from 'classnames';

import Text from '../fields/Text';
import Select from './../fields/Select';
import RadioGroup from '../fields/RadioGroup';

export default class Control extends React.Component {

  componentWillMount() {

  }

  render() {
    let {valid, label, help, children: input, message, ...props} = this.props;

    invariant(
      React.Children.count(this.props.children) === 1,
      'A control must have a single input.'
    );

    let controlClasses = classNames('control', {
      'control--valid': valid,
      'control--invalid': !valid
    });

    //noinspection Eslint
    let controlInputClasses = classNames('control__input', {
      'control__input--shrink': input && (input.type === RadioGroup || input.type === Select)
    });

    let controlAlertClasses = classNames('control__alert', 'v2-icon', 'v2-icon--smallest', {
      'v2-icon--tick': valid,
      'v2-icon--warning-inverse': !valid,
      'control__alert--outside': input && (input.type === RadioGroup || input.type === Select),
    });

    return <div className={controlClasses}>

      <label className="control__label label">
        {label}
      </label>

      {help ?
        <span className="control__help">{help}</span> :
        ''
      }

      <div className={controlInputClasses}>
        {input ?
          React.cloneElement(input, props) :
          ''
        }
        {input ?
          <i className={controlAlertClasses}></i> :
          ''
        }
      </div>

      {message ?
        <div className="control__message">{message}</div> :
        ''
      }

    </div>;
  }

}

Control.propTypes = {
  valid: React.PropTypes.bool.isRequired,
  label: React.PropTypes.string.isRequired,
  message: React.PropTypes.string
};