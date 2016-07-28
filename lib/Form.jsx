import React from 'react';
import classNames from 'classnames';
import Control from './Control';
import Divider from './Divider';

export default class Form extends React.Component {

  constructor(...args) {
    super(...args);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if (!this.props.action) {
      event.preventDefault();
    }
    this.props.onSubmit();
  }

  renderTitle(title) {
    return title ? <h3 className="form__title">{title}</h3> : null;
  }

  renderChildren(children) {
    return React.Children.map(children, function(child) {
      if (React.isValidElement(child) && (child.type === Control || child.type === Divider)) {
        return <div className="form__control">{child}</div>;
      } else {
        return child;
      }
    });
  }

  render() {
    const {theme, title, className, children, ...other} = this.props;

    const formClassNames = classNames('form', className, {
      'form--elizabeth': theme === 'green',
      'form--white': theme === 'white',
      'form--grey': theme === 'grey'
    });

    return (
      <form {...other} className={formClassNames} onSubmit={this.handleSubmit}>
        {this.renderTitle(title)}
        {this.renderChildren(children)}
      </form>
    );
  }

}

Form.propTypes = {
  theme: React.PropTypes.oneOf(['white', 'grey', 'green']),
  title: React.PropTypes.string,
  className: React.PropTypes.string,
  onSubmit: React.PropTypes.func
};

Form.defaultProps = {
  theme: 'white',
  title: '',
  onSubmit: () => {}
};
