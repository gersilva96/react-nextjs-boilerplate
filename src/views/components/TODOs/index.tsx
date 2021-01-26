/**
 * @packageDocumentation
 * @module Views/Components/TODOs
 * TODOs component.
 */

import React from 'react';
import { useSelector } from 'react-redux';

import { todoSelector } from '~/state/features/todoSlice';
import todoController from '~/controller/todos';
import internationalization from '~/internationalization';
import styles from './index.scss';
import TODO from './TODO';

const CounterUI = (): JSX.Element => {
  const todos = useSelector(todoSelector);

  return (
    <div className={styles.container} data-testid="todos-container">
      <div className={styles.title}>{internationalization.get('TODOS_TITLE')}</div>
      <div className={styles.listContainer}>
        {todos.map((todo, index) => (
          <TODO key={index} index={index} name={todo.name} solved={todo.solved} />
        ))}
        <div className={styles.buttonsContainer}>
          <button className={styles.button} onClick={() => todoController.add()}>
            +
          </button>
          <button className={styles.button} onClick={() => todoController.saveInLocalStorage()}>
            LS
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterUI;
