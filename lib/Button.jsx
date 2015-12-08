import React from 'react';

export default class Button extends React.Component {

  render() {
    return (
      <button className="v2-button v2-button--primary v2-button--icon-on-right">
        {this.props.text} <i className="v2-icon v2-icon--smallest v2-icon--chevron-circle-inverse v2-icon--offset-descenders" />
      </button>
    );
  }

}

Button.propTypes = {
  text: React.PropTypes.string.isRequired
};
