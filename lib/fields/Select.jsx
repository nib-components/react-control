import React from 'react';

export default class SelectInput extends React.Component {

  render() {
    let {placeholder, options, ...props} = this.props;

    return <span className="select">
      <select className="select__input" {...props}>
        {Object.keys(options).map(value => {
          return <option className="select__option" key={value} value={value}>{options[value]}</option>;
        })}
      </select>
    </span>;
  }

}

SelectInput.propTypes = {
  placeholder: React.PropTypes.string,
  options: React.PropTypes.object.isRequired
};