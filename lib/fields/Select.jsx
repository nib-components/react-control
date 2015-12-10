import React from 'react';

/**
 * Render a select input
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function Select(props) {
  const {placeholder, options, ...otherProps} = props;

  return (
    <span className="select">
      <select className="select__input" {...otherProps}>
        {placeholder && <option>{placeholder}</option>}
        {Object.keys(options).map(value => (
            <option className="select__option" key={value} value={value}>
              {options[value]}
            </option>
        ))}
      </select>
    </span>
  );

}

Select.propTypes = {
  placeholder: React.PropTypes.string,
  options: React.PropTypes.object.isRequired
};
