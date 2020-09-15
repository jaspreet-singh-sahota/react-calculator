import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.module.css'

function Display({ result }) {
  return (
    <div className={styles.display}>
      <h1 className={styles.result}>{result}</h1>
    </div>
  )
};

Display.prototype = {
  result: PropTypes.string
};

Display.defaultProps = {
  result: '0'
};

export default Display;
