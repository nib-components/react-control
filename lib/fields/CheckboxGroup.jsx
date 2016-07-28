import React from 'react';
import classNames from 'classnames';
import Checkbox from './Checkbox';

/**
 * Render a group of checkbox inputs
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function CheckboxGroup(props) {
  const {name, value, options, className, component: Component, ...otherProps} = props;

  const checkboxGroupClassNames = classNames('checkbox-group', {
    'checkbox-group--disabled': props.disabled
  }, className);

  return (
    <div className={checkboxGroupClassNames}>
      {Object.keys(options).map(option => {
        const checked = value && value.indexOf(option) !== -1;
        return (
          <Component
            {...otherProps}
            key={option}
            name={name} value={option} checked={checked}
            label={options[option]}
          />
        );
      })}
    </div>
  );
}

CheckboxGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.object.isRequired,
  value: React.PropTypes.array,
  disabled: React.PropTypes.bool,
  className: React.PropTypes.string,
  component: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.func
  ])
};

CheckboxGroup.defaultProps = {
  component: Checkbox
};
