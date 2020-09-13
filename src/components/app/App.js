import React from 'react';
import styles from './App.module.css';
import Display from '../display/Display';
import ButtonPanel from '../button-panel/ButtonPanel';
/* eslint-disable no-unused-vars */
import calculate from '../../logic/calculate';
import React from 'react'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Calculator App</h1>
        <div className={styles.app}>
          <Display />
          <ButtonPanel />
        </div>
      </div>
    );
  }
}

export default App;
