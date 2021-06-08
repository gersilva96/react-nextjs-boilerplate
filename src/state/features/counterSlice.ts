/* eslint-disable no-param-reassign */
/**
 * @packageDocumentation
 * @module State/Features/Counter
 * Contains the counter feature.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '~/state/store';

export type CounterStateType = {
  value: number;
};

const initialState: CounterStateType = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    restore: (state: CounterStateType) => {
      state.value = 0;
    },
    increment: (state: CounterStateType) => {
      state.value += 1;
    },
    decrement: (state: CounterStateType) => {
      state.value -= 1;
    },
    incrementByAmount: (state: CounterStateType, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state: CounterStateType, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const counterSelector = (state: RootState): CounterStateType => state.counter;

export const { increment, decrement, incrementByAmount, decrementByAmount, restore } = counterSlice.actions;

export default counterSlice.reducer;
