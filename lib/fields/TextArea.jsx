import React from 'react';

/**
 * Render a textarea input
 * @param   {object} props
 * @returns {ReactElement}
 */
export default function TextArea(props) {
  return (
    <textarea className="textarea" {...props}></textarea>
  );
}
