/**
 * @packageDocumentation
 * @module State/store
 * Contains the store for state.
 */

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@state/features/counterSlice';
import todosReducer from '@state/features/todoSlice';

const reducer = {
  counter: counterReducer,
  todos: todosReducer,
};

const store = configureStore({
  reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
