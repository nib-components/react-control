import React from 'react';
import classNames from 'classnames';

import Control from './Control';
import TextInput from './TextInput';
import RadioGroup from './RadioGroup';
import SelectInput from './SelectInput';

export default class Form extends React.Component {

  componentWillMount() {

  }

  maybeRenderTitle(title) {
    if (this.props.title) {
      return <h3 className="v2-title v2-title--2">{title}</h3>
    }
  }

  render() {
    let {theme, title, ...props} = this.props;

    let formClasses = classNames('form', {
      'form--elizabeth': theme === "elizabeth",
      'form--white': theme === "white",
      'form--grey': theme === "grey"
    });


    return (
      <div className={formClasses}>
        {this.maybeRenderTitle(title)}
        {this.props.children}
      </div>
    );
  }

}

Form.propTypes = {
  theme: React.PropTypes.string.isRequired,
  title: React.PropTypes.string
};