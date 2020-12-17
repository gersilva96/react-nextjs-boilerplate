import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  counterSelector,
} from '@redux/features/counterSlice';

const Counter = (): JSX.Element => {
  const dispatch = useDispatch();
  const { value } = useSelector(counterSelector);

  const [incInput, setIncInput] = useState('');
  const [decInput, setDecInput] = useState('');

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(incrementByAmount(Number(incInput)));
        }}
      >
        <input value={incInput} onChange={(e) => setIncInput(e.target.value)} />
        <button>Increment by amount</button>
      </form>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(decrementByAmount(Number(decInput)));
        }}
      >
        <input value={decInput} onChange={(e) => setDecInput(e.target.value)} />
        <button>Decrement by amount</button>
      </form>
    </div>
  );
};

export default Counter;
