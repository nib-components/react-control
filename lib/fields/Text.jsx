import React from 'react';

export default class TextInput extends React.Component {

  render() {
    const {...props} = this.props;
    return <input className="textbox" {...props}/>;
  }

}
