import styles from './App.module.css';
import Display from '../display/Display';
import ButtonPanel from '../button-panel/ButtonPanel';
import calculate from '../../logic/calculate';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      total: null,
      next: null,
      operation: null
    }
  }

  handleClick = (buttonName) => (
    this.setState(data => calculate(data, buttonName))
  )

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Calculator App</h1>
        <div className={styles.app}>
          <Display />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

