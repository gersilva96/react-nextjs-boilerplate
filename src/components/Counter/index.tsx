/**
 * @packageDocumentation
 * @module Views/Components/Counter
 * UI to modify the counter.
 */

import { useState } from 'react';

import { Card, CardContent, Typography, IconButton, TextField } from '@material-ui/core';
import { ExposureNeg1, ExposureZero, ExposurePlus1, Add, Remove } from '@material-ui/icons';
import { useSelector } from 'react-redux';

import styles from './index.module.scss';
import counterController from '~/controller/counter';
import i18n from '~/internationalization';
import { counterSelector } from '~/state/features/counterSlice';

const CounterUI = (): JSX.Element => {
  const { value } = useSelector(counterSelector);
  const [amount, setAmount] = useState('0');

  return (
    <div className={styles.mainContainer} data-testid="counter-container">
      <Typography className={styles.title} variant="h4" align="center">
        {i18n.get('COUNTER_TITLE')}
      </Typography>
      <Card className={styles.container}>
        <CardContent>
          <div className={styles.counterNumber}>{value}</div>
          <div className={styles.buttonGroup}>
            <IconButton aria-label="increment by one" color="primary" onClick={counterController.decrement}>
              <ExposureNeg1 fontSize="large" />
            </IconButton>
            <IconButton aria-label="restore to zero" color="primary" onClick={counterController.restore}>
              <ExposureZero fontSize="large" />
            </IconButton>
            <IconButton aria-label="decrement by one" color="primary" onClick={counterController.increment}>
              <ExposurePlus1 fontSize="large" />
            </IconButton>
          </div>
          <div className={styles.buttonGroup}>
            <TextField
              className={styles.inputByAmount}
              id="standard-basic"
              label={i18n.get('COUNTER_BY_AMOUNT_INPUT_LABEL')}
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
        </CardContent>
      </Card>
    </div>
  );
};

export default CounterUI;
