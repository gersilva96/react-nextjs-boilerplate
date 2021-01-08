/* eslint-disable no-param-reassign */
/**
 * @packageDocumentation
 * @module State/Features/Counter
 * Contains the counter feature.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '~/state/store';

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    restore: (state: CounterState) => {
      state.value = 0;
    },
    increment: (state: CounterState) => {
      state.value += 1;
    },
    decrement: (state: CounterState) => {
      state.value -= 1;
    },
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const counterSelector = (state: RootState): CounterState => state.counter;

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  restore,
} = counterSlice.actions;

export default counterSlice.reducer;
