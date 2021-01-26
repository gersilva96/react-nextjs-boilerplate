/* eslint-disable no-param-reassign */
/**
 * @packageDocumentation
 * @module State/Features/TODO
 * Contains the TODOs feature.
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '~/state/store';
import { TODOType } from '~/types/TODO';

export type TodoStateType = TODOType[];

type ShiftType = {
  firstIndex: number;
  secondIndex: number;
};

const initialState: TodoStateType = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    empty: (state: TodoStateType) => {
      state.length = 0;
    },
    add: (state: TodoStateType, action: PayloadAction<TODOType>) => {
      state.push(action.payload);
    },
    toggleSolved: (state: TodoStateType, action: PayloadAction<number>) => {
      const index = action.payload;
      state[index].solved = !state[index].solved;
    },
    remove: (state: TodoStateType, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
    shift: (state: TodoStateType, action: PayloadAction<ShiftType>) => {
      const { firstIndex, secondIndex } = action.payload;
      const tmpContent = state[firstIndex];
      state[firstIndex] = state[secondIndex];
      state[secondIndex] = tmpContent;
    },
  },
});

export const todoSelector = (state: RootState): TodoStateType => state.todos;

export const { empty, add, toggleSolved, remove, shift } = todosSlice.actions;

export default todosSlice.reducer;
