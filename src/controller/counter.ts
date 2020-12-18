/**
 * @packageDocumentation
 * @module Controller/Counter
 * Interacts with the counter.
 */

import { counter, store } from '~/model';

class Counter {
  /**
   * Gets the counter value.
   */
  get(): number {
    return store.getState().counter.value;
  }

  /**
   * Sets the number to zero.
   */
  restore(): number {
    store.dispatch(counter.restore());
    return this.get();
  }

  /**
   * Increments the counter and returns the result.
   */
  increment(): number {
    store.dispatch(counter.increment());
    return this.get();
  }

  /**
   * Increments the counter by amount and returns the result.
   */
  incrementByAmount(amount: number): number {
    const incrementAction = counter.incrementByAmount(amount);
    store.dispatch(incrementAction);
    return this.get();
  }

  /**
   * Decrements the counter and returns the result.
   */
  decrement(): number {
    store.dispatch(counter.decrement());
    return this.get();
  }

  /**
   * Decrements the counter by amount and returns the result.
   */
  decrementByAmount(amount: number): number {
    const decrementAction = counter.decrementByAmount(amount);
    store.dispatch(decrementAction);
    return this.get();
  }
}

export default new Counter();
