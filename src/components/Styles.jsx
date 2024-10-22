import React from 'react';

const DynamicStyleParagraph = ({ isHighlighted, text }) => (
  <p style={{ color: isHighlighted ? 'red' : 'black' }}>
    {text}
  </p>
);

export default DynamicStyleParagraph;
