import React from 'react';
import classNames from 'classnames';
import Control from './Control';

export default class Form extends React.Component {

  constructor(...args) {
    super(...args);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  renderTitle(title) {
    return title && <h3 className="form__title">{title}</h3>;
  }

  renderChildren(children) {
    return React.Children.map(children, function(child) {
      if (React.isValidElement(child) && child.type === Control) {
        return <div className="form__control">{child}</div>;
      } else {
        return child;
      }
    });
  }

  render() {
    const {theme, title, children} = this.props;

    const formClassNames = classNames('form', {
      'form--elizabeth': theme === 'green',
      'form--white': theme === 'white',
      'form--grey': theme === 'grey'
    });

    return (
      <form className={formClassNames} onSubmit={this.handleSubmit}>
        {this.renderTitle(title)}
        {this.renderChildren(children)}
      </form>
    );
  }

}

Form.propTypes = {
  theme: React.PropTypes.oneOf(['white', 'grey', 'green']),
  title: React.PropTypes.string,
  onSubmit: React.PropTypes.func
};

Form.defaultProps = {
  theme: 'white',
  title: '',
  onSubmit: () => {}
};
