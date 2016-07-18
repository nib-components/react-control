import React from 'react';
import classNames from 'classnames';
import Radio from './Radio';

//FIXME?? maybe dont care tho? - the radio is never unselected when user selects a different radio
// => need to maintain state if we're going to make it work without it being hooked up to redux :(

/**
 * Render a group of radio inputs
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function RadioGroup(props) {
  const {className, name, value, defaultValue, options, ...otherProps} = props;

  const inputClassNames = classNames('radio-group', {
    'radio-group--disabled': props.disabled
  }, className);

  return (
    <div className={inputClassNames}>
      {Object.keys(options).map(option => {

        let checked = null;
        if (typeof value !== 'undefined') {
          checked = option == value; //eslint-disable-line eqeqeq
        } else if (typeof defaultValue !== 'undefined') {
          checked = option == defaultValue; //eslint-disable-line eqeqeq
        }

        return (
          <Radio
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

RadioGroup.propTypes = {
  className: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.object.isRequired,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  defaultValue: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};
