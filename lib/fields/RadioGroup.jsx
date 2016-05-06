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

  return (
    <div className={classNames('radio-group', className)}>
      {Object.keys(options).map(option => (
        <Radio
          {...otherProps}
          key={option}
          name={name} value={option} label={options[option]}
          checked={typeof value !== 'undefined' ? option == value : null} //eslint-disable-line eqeqeq
          defaultChecked={option == defaultValue} //eslint-disable-line eqeqeq
        />
      ))}
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
