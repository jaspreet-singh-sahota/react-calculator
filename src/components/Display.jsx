import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div>
      <h2>{result}</h2>
    </div>
  )
};

Display.prototype = {
  name: PropTypes.String
};

Display.defaultProps = {
  result: 0,
};

export default Display;
