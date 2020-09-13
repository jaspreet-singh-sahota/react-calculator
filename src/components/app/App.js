import React from 'react';
import styles from './App.module.css';
import Display from '../display/Display';
import ButtonPanel from '../button-panel/ButtonPanel';

function App() {
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

export default App;
