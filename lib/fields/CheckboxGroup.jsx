import React from 'react';
import ReactDOM from 'react-dom';
import CheckboxInput from './Checkbox';

export default class CheckboxGroup extends React.Component {

  render() {

    let {name, value, defaultValue, options, ...props} = this.props;

    return <div className="checkbox-group">
      {Object.keys(options).map(option => {
        return <CheckboxInput {...props} key={option} name={name} value={option} label={options[option]} checked={value ? value.indexOf(option) !== -1 : null} defaultChecked={defaultValue ? defaultValue.indexOf(option) !== -1 : null}/>;
      })}
    </div>;

  }

}

CheckboxGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.object.isRequired
};