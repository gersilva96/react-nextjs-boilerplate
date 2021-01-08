/**
 * @packageDocumentation
 * @module State/Actions/Counter
 * Interacts with the counter state.
 */

import * as counter from '~/state/features/counterSlice';
import store from '~/state/store';

/**
 * Gets the counter result.
 */
const get = function get() {
  return store.getState().counter.value;
};

/**
 * Actions that can be made in the counter.
 */
const counterActions = {
  /**
   * Gets the counter value.
   */
  get: (): number => get(),

  /**
   * Sets the number to zero.
   */
  restore: (): number => {
    store.dispatch(counter.restore());
    return get();
  },

  /**
   * Increments the counter and returns the result.
   */
  increment: (): number => {
    store.dispatch(counter.increment());
    return get();
  },

  /**
   * Increments the counter by amount and returns the result.
   * @param amount Amount to be modified by.
   */
  incrementByAmount: (amount: number): number => {
    const incrementAction = counter.incrementByAmount(amount);
    store.dispatch(incrementAction);
    return get();
  },

  /**
   * Decrements the counter and returns the result.
   */
  decrement: (): number => {
    store.dispatch(counter.decrement());
    return get();
  },

  /**
   * Decrements the counter by amount and returns the result.
   * @param amount Amount to be modified by.
   */
  decrementByAmount: (amount: number): number => {
    const decrementAction = counter.decrementByAmount(amount);
    store.dispatch(decrementAction);
    return get();
  },
};

export default counterActions;
