/**
 * @packageDocumentation
 * @module Controller/Counter
 * Interacts with the counter state.
 */

import counterActions from '~/state/actions/counter';

const counterController = {
  /**
   * Gets the counter value.
   */
  get: (): number => counterActions.get(),

  /**
   * Sets the number to zero.
   */
  restore: (): number => counterActions.restore(),

  /**
   * Increments the counter and returns the result.
   */
  increment: (): number => counterActions.increment(),

  /**
   * Increments the counter by amount and returns the result.
   * @param amount Amount to be modified by.
   */
  incrementByAmount: (amount: number): number => counterActions.incrementByAmount(amount),

  /**
   * Decrements the counter and returns the result.
   */
  decrement: (): number => counterActions.decrement(),

  /**
   * Decrements the counter by amount and returns the result.
   * @param amount Amount to be modified by.
   */
  decrementByAmount: (amount: number): number => counterActions.decrementByAmount(amount),
};

export default counterController;
