import React from 'react';

/**
 * Render a text input
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function Text(props) {
  return (
    <input className="textbox" {...props}/>
  );
}
