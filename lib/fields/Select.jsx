import React from 'react';
import classNames from 'classnames';
import isArray from 'lodash.isarray';

/**
 * Render a select input
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function Select(props) {
  const {className, placeholder, options, ...otherProps} = props;

  let optionsArray = options;
  if (!isArray(options)) {
    optionsArray = Object.keys(options).map(key => (
      {value: key, label: options[key]}
    ));
  }

  return (
    <span className={classNames('select', className)}>
      <select className="select__input" {...otherProps}>
        {placeholder && <option>{placeholder}</option>}
        {optionsArray.map((element, index) => (
            <option className="select__option" key={index} value={element.value}>
              {element.label}
            </option>
        ))}
      </select>
    </span>
  );
    
}

Select.propTypes = {
  className: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  options: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.shape({
      value: React.PropTypes.string,
      label: React.PropTypes.string
    })),
    React.PropTypes.objectOf(React.PropTypes.string)
  ])
};

