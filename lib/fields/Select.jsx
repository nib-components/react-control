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
    optionsArray = Object.keys(options).map(key => {
      return {value: key, text: options[key]};
    });
  }
  
  return (
    <span className={classNames('select', className)}>
      <select className="select__input" {...otherProps}>
        {placeholder && <option>{placeholder}</option>}
        {optionsArray.map((element, index) => (
            <option className="select__option" key={index} value={element.value}>
              {element.text}
            </option>
        ))}
      </select>
    </span>
  );
    
}

Select.propTypes = {
  className: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  options: React.PropTypes.any.isRequired
};
