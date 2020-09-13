import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';


const Button = ({ name, color, wide, clickHandler }) => (
  <div className={styles.div} style={{ width: wide }}>
    <button className={styles.button}
      onClick={() => clickHandler(name)}
      style={{ backgroundColor: color}}
    >
      {name}
    </button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.string,
};

Button.defaultProps = {
  color: '#fe902a',
  wide: '25%',
};

export default Button;
