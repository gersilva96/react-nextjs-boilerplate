/* eslint-disable no-param-reassign */
/**
 * @packageDocumentation
 * @module State/Features/TODO
 * Contains the TODOs feature.
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@state/store';
import { TODOType } from '~/types/TODO';

type TodoStateType = {
  todos: TODOType[];
};

type ShiftType = {
  firstIndex: number;
  secondIndex: number;
};

const initialState: TodoStateType = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    empty: (state: TodoStateType) => {
      state.todos = [];
    },
    add: (state: TodoStateType, action: PayloadAction<TODOType>) => {
      state.todos.push(action.payload);
    },
    toggleSolved: (state: TodoStateType, action: PayloadAction<number>) => {
      const index = action.payload;
      state.todos[index].solved = !state.todos[index].solved;
    },
    remove: (state: TodoStateType, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
    },
    shift: (state: TodoStateType, action: PayloadAction<ShiftType>) => {
      const { firstIndex, secondIndex } = action.payload;
      const tmpContent = state.todos[firstIndex];
      state.todos[firstIndex] = state.todos[secondIndex];
      state.todos[secondIndex] = tmpContent;
    },
  },
});

export const todoSelector = (state: RootState): TodoStateType => state.todos;

export const { empty, add, toggleSolved, remove, shift } = todosSlice.actions;

export default todosSlice.reducer;
