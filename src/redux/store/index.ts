import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@redux/features/counterSlice';

const reducer = {
  counter: counterReducer,
};

const store = configureStore({
  reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
