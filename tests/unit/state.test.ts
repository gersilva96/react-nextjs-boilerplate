/**
 * @packageDocumentation
 * @module Tests/State
 * It has the unit tests for the app state.
 */

import { format } from 'date-fns';

import { store } from '../../src/state';
import * as counter from '../../src/state/features/counterSlice';
import * as nasaApod from '../../src/state/features/nasaApodSlice';
import * as todo from '../../src/state/features/todoSlice';

describe('Counter state', () => {
  test('increment action should increment counter state by 1', () => {
    store.dispatch(counter.increment());
    const counterState = <counter.CounterStateType>store.getState().counter;
    expect(counterState).toMatchObject({ value: 1 });
  });

  test('incrementByAmount action should increment counter state by 3', () => {
    store.dispatch(counter.incrementByAmount(3));
    const counterState = <counter.CounterStateType>store.getState().counter;
    expect(counterState).toMatchObject({ value: 4 });
  });

  test('decrement action should decrement counter state by 1', () => {
    store.dispatch(counter.decrement());
    const counterState = <counter.CounterStateType>store.getState().counter;
    expect(counterState).toMatchObject({ value: 3 });
  });

  test('decrementByAmount action should decrement counter state by 5', () => {
    store.dispatch(counter.decrementByAmount(5));
    const counterState = <counter.CounterStateType>store.getState().counter;
    expect(counterState).toMatchObject({ value: -2 });
  });

  test('restore action should restore counter state to 0', () => {
    store.dispatch(counter.restore());
    const counterState = <counter.CounterStateType>store.getState().counter;
    expect(counterState).toMatchObject({ value: 0 });
  });
});

describe('TODOs state', () => {
  test('add action should add a todo', () => {
    store.dispatch(todo.add({ name: 'Comprar leña', solved: false }));
    store.dispatch(todo.add({ name: 'Comprar carne', solved: false }));
    store.dispatch(todo.add({ name: 'Comprar vino', solved: false }));
    const todosState = <todo.TodoStateType>store.getState().todos;
    expect(todosState).toStrictEqual([
      { name: 'Comprar leña', solved: false },
      { name: 'Comprar carne', solved: false },
      { name: 'Comprar vino', solved: false },
    ]);
  });

  test('toggleSolved action should toggle solved property from false to true', () => {
    store.dispatch(todo.toggleSolved(0));
    const todosState = <todo.TodoStateType>store.getState().todos;
    expect(todosState[0]).toMatchObject({ name: 'Comprar leña', solved: true });
  });

  test('remove action should remove a specific todo', () => {
    store.dispatch(todo.remove(2));
    const todosState = <todo.TodoStateType>store.getState().todos;
    expect(todosState).toStrictEqual([
      { name: 'Comprar leña', solved: true },
      { name: 'Comprar carne', solved: false },
    ]);
  });

  test('shift action should shift the existing todos', () => {
    store.dispatch(todo.shift({ firstIndex: 0, secondIndex: 1 }));
    const todosState = <todo.TodoStateType>store.getState().todos;
    expect(todosState[0]).toMatchObject({ name: 'Comprar carne', solved: false });
    expect(todosState[1]).toMatchObject({ name: 'Comprar leña', solved: true });
  });

  test('empty action should empty the todos array', () => {
    store.dispatch(todo.empty());
    const todosState = <todo.TodoStateType>store.getState().todos;
    expect(todosState.length).toBe(0);
  });
});

describe('NASA-APOD state', () => {
  test('setLink action should set the media link', () => {
    let nasaApodState = <nasaApod.NasaApodStateType>store.getState().nasaApod;
    expect(nasaApodState.link).toMatch('');
    store.dispatch(nasaApod.setLink('I am a link'));
    nasaApodState = <nasaApod.NasaApodStateType>store.getState().nasaApod;
    expect(nasaApodState.link).toMatch('I am a link');
  });

  test('setDate action should set the date string', () => {
    let nasaApodState = <nasaApod.NasaApodStateType>store.getState().nasaApod;
    const date = format(new Date(nasaApodState.date), 'yyyy-MM-dd HH:mm');
    expect(date).toMatch(format(new Date(), 'yyyy-MM-dd HH:mm'));
    const newDate = new Date('1996-02-28').toString();
    store.dispatch(nasaApod.setDate(newDate));
    nasaApodState = <nasaApod.NasaApodStateType>store.getState().nasaApod;
    expect(nasaApodState.date).toMatch(newDate);
  });

  test('setTitle action should set the media title', () => {
    let nasaApodState = <nasaApod.NasaApodStateType>store.getState().nasaApod;
    expect(nasaApodState.title).toMatch('');
    store.dispatch(nasaApod.setTitle('I am a title'));
    nasaApodState = <nasaApod.NasaApodStateType>store.getState().nasaApod;
    expect(nasaApodState.title).toMatch('I am a title');
  });

  test('setCopyright action should set the media copyright', () => {
    let nasaApodState = <nasaApod.NasaApodStateType>store.getState().nasaApod;
    expect(nasaApodState.copyright).toMatch('-');
    store.dispatch(nasaApod.setCopyright('I am a copyright'));
    nasaApodState = <nasaApod.NasaApodStateType>store.getState().nasaApod;
    expect(nasaApodState.copyright).toMatch('I am a copyright');
  });

  test('setExplanation action should set the media explanation', () => {
    let nasaApodState = <nasaApod.NasaApodStateType>store.getState().nasaApod;
    expect(nasaApodState.explanation).toMatch('');
    store.dispatch(nasaApod.setExplanation('I am a explanation'));
    nasaApodState = <nasaApod.NasaApodStateType>store.getState().nasaApod;
    expect(nasaApodState.explanation).toMatch('I am a explanation');
  });

  test('setLoading action should set the loading boolean', () => {
    let nasaApodState = <nasaApod.NasaApodStateType>store.getState().nasaApod;
    expect(nasaApodState.loading).toBeFalsy();
    store.dispatch(nasaApod.setLoading(true));
    nasaApodState = <nasaApod.NasaApodStateType>store.getState().nasaApod;
    expect(nasaApodState.loading).toBeTruthy();
  });
});
