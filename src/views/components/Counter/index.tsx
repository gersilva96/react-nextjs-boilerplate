/**
 * @packageDocumentation
 * @module Views/Components/Counter
 * UI to modify the counter.
 */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { counterSelector } from '@model/features/counterSlice';
import counterController from '@controller/counter';
import styles from './index.scss';

const CounterUI = (): JSX.Element => {
  const { value } = useSelector(counterSelector);
  const [getAmount, setAmount] = useState('0');

  return (
    <div className={styles.container}>
      <div className={styles.counterNumber}>{value}</div>
      <div className={styles.singleChangers}>
        <button onClick={() => counterController.decrement()}>-</button>
        <button onClick={() => counterController.restore()}>0</button>
        <button onClick={() => counterController.increment()}>+</button>
      </div>
      <div className={styles.amountChangers}>
        <input type="number" value={getAmount} onChange={(e) => setAmount(e.target.value)} />
        <div className={styles.amountChangersButtons}>
          <button onClick={() => counterController.decrementByAmount(Number(getAmount))}>-</button>
          <button onClick={() => counterController.incrementByAmount(Number(getAmount))}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CounterUI;
