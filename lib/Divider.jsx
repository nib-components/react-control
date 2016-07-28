import React from 'react';

export default function Divider(props) {
  const {className, ...otherProps} = props;
  return (
    <hr {...otherProps} className={classNames(className, 'divider')} />
  );
}

Divider.propTypes = {
  className: React.PropTypes.string
};
