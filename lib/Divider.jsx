import React from 'react';
import classNames from 'classnames';

export default function Divider(props) {
  const {className, ...otherProps} = props;
  return (
    <hr {...otherProps} className={classNames(className, 'divider')} />
  );
}

Divider.propTypes = {
  className: React.PropTypes.string
};
