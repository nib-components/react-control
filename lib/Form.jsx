import React from 'react';
import classNames from 'classnames';

import Control from './Control';

export default class Form extends React.Component {

  componentWillMount() {

  }

  maybeRenderTitle(title) {
    if (this.props.title) {
      return <h3 className="v2-title v2-title--2 form__title">{title}</h3>
    }
  }

  wrapChildren(children) {
    return React.Children.map(children, function(child) {
      if (child.type === Control) {
        return <div className="form__control">{child}</div>;
      } else {
        return child;
      }
    });
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
        {this.wrapChildren(this.props.children)}
      </div>
    );
  }

}

Form.propTypes = {
  theme: React.PropTypes.string.isRequired,
  title: React.PropTypes.string
};