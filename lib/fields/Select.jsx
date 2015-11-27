import React from 'react';

export default class SelectInput extends React.Component {

  render() {
    const {placeholder, options, ...props} = this.props;

    return (
      <span className="select">
        <select className="select__input" {...props}>
          <option>{placeholder}</option>
          {Object.keys(options).map(value => (
              <option className="select__option" key={value} value={value}>
                {options[value]}
              </option>
          ))}
        </select>
      </span>
    );

  }

}

SelectInput.propTypes = {
  placeholder: React.PropTypes.string,
  options: React.PropTypes.object.isRequired
};
