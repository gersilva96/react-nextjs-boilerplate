/**
 * @packageDocumentation
 * @module Tests/State
 * It has the unit tests for the app state.
 */

import moment from 'moment';
import { store } from '../../src/state';
import * as counter from '../../src/state/features/counterSlice';
import * as todo from '../../src/state/features/todoSlice';
import * as nasaApod from '../../src/state/features/nasaApodSlice';

describe('Counter state', () => {
  test('increment action should increment counter state by 1', () => {
    store.dispatch(counter.increment());
    const counterState = store.getState().counter;
    expect(counterState).toMatchObject({ value: 1 });
  });

  test('incrementByAmount action should increment counter state by 3', () => {
    store.dispatch(counter.incrementByAmount(3));
    const counterState = store.getState().counter;
    expect(counterState).toMatchObject({ value: 4 });
  });

  test('decrement action should decrement counter state by 1', () => {
    store.dispatch(counter.decrement());
    const counterState = store.getState().counter;
    expect(counterState).toMatchObject({ value: 3 });
  });

  test('decrementByAmount action should decrement counter state by 5', () => {
    store.dispatch(counter.decrementByAmount(5));
    const counterState = store.getState().counter;
    expect(counterState).toMatchObject({ value: -2 });
  });

  test('restore action should restore counter state to 0', () => {
    store.dispatch(counter.restore());
    const counterState = store.getState().counter;
    expect(counterState).toMatchObject({ value: 0 });
  });
});

describe('TODOs state', () => {
  test('add action should add a todo', () => {
    store.dispatch(todo.add({ name: 'Comprar leña', solved: false }));
    store.dispatch(todo.add({ name: 'Comprar carne', solved: false }));
    store.dispatch(todo.add({ name: 'Comprar vino', solved: false }));
    const todosState = store.getState().todos;
    expect(todosState).toStrictEqual([
      { name: 'Comprar leña', solved: false },
      { name: 'Comprar carne', solved: false },
      { name: 'Comprar vino', solved: false },
    ]);
  });

  test('toggleSolved action should toggle solved property from false to true', () => {
    store.dispatch(todo.toggleSolved(0));
    const todosState = store.getState().todos;
    expect(todosState[0]).toMatchObject({ name: 'Comprar leña', solved: true });
  });

  test('remove action should remove a specific todo', () => {
    store.dispatch(todo.remove(2));
    const todosState = store.getState().todos;
    expect(todosState).toStrictEqual([
      { name: 'Comprar leña', solved: true },
      { name: 'Comprar carne', solved: false },
    ]);
  });

  test('shift action should shift the existing todos', () => {
    store.dispatch(todo.shift({ firstIndex: 0, secondIndex: 1 }));
    const todosState = store.getState().todos;
    expect(todosState[0]).toMatchObject({ name: 'Comprar carne', solved: false });
    expect(todosState[1]).toMatchObject({ name: 'Comprar leña', solved: true });
  });
});

describe('NASA-APOD state', () => {
  test('setLink action should set the media link', () => {
    let nasaApodState = store.getState().nasaApod;
    expect(nasaApodState.link).toMatch('');
    store.dispatch(nasaApod.setLink('I am a link'));
    nasaApodState = store.getState().nasaApod;
    expect(nasaApodState.link).toMatch('I am a link');
  });

  test('setDate action should set the date string', () => {
    let nasaApodState = store.getState().nasaApod;
    expect(nasaApodState.date).toMatch(moment().format('YYYY-MM-DD'));
    store.dispatch(nasaApod.setDate('1996-02-28'));
    nasaApodState = store.getState().nasaApod;
    expect(nasaApodState.date).toMatch('1996-02-28');
  });

  test('setLoading action should set the loading boolean', () => {
    let nasaApodState = store.getState().nasaApod;
    expect(nasaApodState.loading).toBeFalsy();
    store.dispatch(nasaApod.setLoading(true));
    nasaApodState = store.getState().nasaApod;
    expect(nasaApodState.loading).toBeTruthy();
  });
});
