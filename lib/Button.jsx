import React from 'react';

export default class Button extends React.Component {

  render() {
    const {label, glyph, ...props} = this.props;
    return (
      <button className="v2-button v2-button--primary v2-button--icon-on-right" {...props}>
        {label} <i className={`v2-icon v2-icon--smallest v2-icon--${glyph} v2-icon--offset-descenders`} />
      </button>
    );
  }

}

Button.propTypes = {
  glyph: React.PropTypes.string,
  label: React.PropTypes.string.isRequired
};

Button.defaultProps = {
  glyph: 'chevron-circle-inverse'
};
