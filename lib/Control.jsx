import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';

import Select from '././fields/Select';
import RadioGroup from './fields/RadioGroup';
import Checkbox from './fields/Checkbox';
import CheckboxGroup from './fields/CheckboxGroup';

export default class Control extends React.Component {

  render() {

    const {label, help, error, valid, validated, children, ...otherProps} = this.props;
    const dataTestAttributeValue = this.props['data-test'];
    otherProps['data-test'] = dataTestAttributeValue ? 'input' : null; // Value to be passed to children
    
    const controlClasses = classNames('control', {
      [`control--${this.props.name}`]: this.props.name,
      'control--valid': validated && valid,
      'control--invalid': validated && !valid
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
      <div className={controlClasses} data-test={dataTestAttributeValue ? `${dataTestAttributeValue}-control` : null}>

        <label className="control__label label" data-test={dataTestAttributeValue ? 'label' : null}>
          {label}
        </label>

        {help
        && <span className="control__help" data-test={dataTestAttributeValue ? 'help' : null}>{help}</span>
        }

        <div className={controlInputClasses}>

          {children
          && React.cloneElement(children, otherProps)
          }

          {validated
          && <i className={controlAlertClasses} data-test={dataTestAttributeValue ? 'alert' : null}></i>
          }

        </div>

        <ReactCSSTransitionGroup
          transitionName="control-message"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {error
          && (
            <div className="control__message" data-test={dataTestAttributeValue ? 'message' : null}>
              <p className="control__message-text" data-test={dataTestAttributeValue ? 'message-text' : null}>{error}</p>
            </div>
          )
          }
        </ReactCSSTransitionGroup>

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
  help: '',
  error: '',
  valid: false,
  validated: false
};
