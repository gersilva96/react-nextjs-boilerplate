/**
 * @packageDocumentation
 * @module State/store
 * Contains the store for state.
 */

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '~/state/features/counterSlice';
import todosReducer from '~/state/features/todoSlice';
import nasaApodReducer from '~/state/features/nasaApodSlice';
import formReducer from '~/state/features/formSlice';

const reducer = {
  counter: counterReducer,
  todos: todosReducer,
  nasaApod: nasaApodReducer,
  form: formReducer,
};

const store = configureStore({
  reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
