/**
 * @packageDocumentation
 * @module Views/Components/Counter
 * UI to modify the counter.
 */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IconButton, TextField } from '@material-ui/core';
import { ExposureNeg1, ExposureZero, ExposurePlus1, Add, Remove } from '@material-ui/icons';
import { counterSelector } from '~/state/features/counterSlice';
import counterController from '~/controller/counter';
import i18n from '~/internationalization';
import styles from './index.scss';

const CounterUI = (): JSX.Element => {
  const { value } = useSelector(counterSelector);
  const [amount, setAmount] = useState('0');

  return (
    <div className={styles.container} data-testid="counter-container">
      <div className={styles.counterNumber}>{value}</div>
      <div className={styles.buttonGroup}>
        <IconButton
          aria-label="increment by one"
          color="primary"
          onClick={counterController.decrement}
        >
          <ExposureNeg1 fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="restore to zero"
          color="primary"
          onClick={counterController.restore}
        >
          <ExposureZero fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="decrement by one"
          color="primary"
          onClick={counterController.increment}
        >
          <ExposurePlus1 fontSize="large" />
        </IconButton>
      </div>
      <div className={styles.buttonGroup}>
        <TextField
          id="standard-basic"
          label={i18n.get('BY_AMOUNT_INPUT_LABEL')}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
        />
        <IconButton
          aria-label="decrement by amount"
          color="primary"
          onClick={() => counterController.decrementByAmount(Number(amount))}
        >
          <Remove fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="increment by amount"
          color="primary"
          onClick={() => counterController.incrementByAmount(Number(amount))}
        >
          <Add fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default CounterUI;
