import React from 'react';
import Button from '../button/Button';
import styles from './ButtonPanel.module.css'

function ButtonPanel({ clickHandler }) {
  return (
    <div className={styles.panel}>
      <div className={styles.group1}>
        <Button clickHandler={clickHandler} name="AC" color={'#dfdfdf'} />
        <Button clickHandler={clickHandler} name="+/-" color={'#dfdfdf'} />
        <Button clickHandler={clickHandler} name="%" color={'#dfdfdf'} />
        <Button clickHandler={clickHandler} name="÷" />
      </div>
      <div className={styles.group2}>
        <Button clickHandler={clickHandler} name="7" color={'#dfdfdf'} />
        <Button clickHandler={clickHandler} name="8" color={'#dfdfdf'} />
        <Button clickHandler={clickHandler} name="9" color={'#dfdfdf'} />
        <Button clickHandler={clickHandler} name="X" />
      </div>
      <div className={styles.group3}>
        <Button clickHandler={clickHandler} name="4" color={'#dfdfdf'} />
        <Button clickHandler={clickHandler} name="5" color={'#dfdfdf'} />
        <Button clickHandler={clickHandler} name="6" color={'#dfdfdf'} />
        <Button clickHandler={clickHandler} name="-" />
      </div>
      <div className={styles.group4}>
        <Button clickHandler={clickHandler} name="1" color={'#dfdfdf'} />
        <Button clickHandler={clickHandler} name="2" color={'#dfdfdf'} />
        <Button clickHandler={clickHandler} name="3" color={'#dfdfdf'} />
        <Button clickHandler={clickHandler} name="+" />
      </div>
      <div className={styles.group5}>
        <Button clickHandler={clickHandler} name="0" color={'#dfdfdf'} wide={'50%'}/>
        <Button clickHandler={clickHandler} name="." color={'#dfdfdf'} />
        <Button clickHandler={clickHandler} name="=" />
      </div>
    </div>
  )
};

export default ButtonPanel;
