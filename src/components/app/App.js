import React, { Component } from 'react';
import styles from './App.module.css';
import Display from '../display/Display';
import ButtonPanel from '../button-panel/ButtonPanel';
import calculate from '../../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      // eslint-disable-next-line
      operation: null, previousOperation: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(data => calculate(data, buttonName));
  }

  render() {
    const { total, next } = this.state;
    const result = next || total || '0';

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Calculator App</h1>
        <div className={styles.app}>
          <Display result={result} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}
