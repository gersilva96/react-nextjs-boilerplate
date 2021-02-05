/**
 * @packageDocumentation
 * @module Views/Components/TODOs/TODO
 * Component that contaisn one TO DO.
 */

import React from 'react';
import { useSelector } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';

import { todoSelector } from '~/state/features/todoSlice';
import todosController from '~/controller/todos';
import styles from './index.scss';

export type PropsType = {
  index: number;
  name: string;
  solved: boolean;
};

/**
 * Button to go up in the list.
 */
const ButtonUp = (index: number) => (
  <button className={styles.button} onClick={() => todosController.shift(index, index - 1)}>
    ↑
  </button>
);

/**
 * Button to go down in the list.
 */
const ButtonDown = (index: number) => (
  <button className={styles.button} onClick={() => todosController.shift(index, index + 1)}>
    ↓
  </button>
);

/**
 * Contains the TO DO component.
 * @param props Props of the component.
 */
const TODO = ({ index, name, solved }: PropsType): JSX.Element => {
  const todos = useSelector(todoSelector);
  const lastIndex = todos.length - 1;

  const buttonUp = index === 0 ? null : ButtonUp(index);
  const buttonDown = index === lastIndex ? null : ButtonDown(index);

  const todoClass = solved ? styles.todoSolved : styles.todoUnsolved;

  return (
    <div className={todoClass}>
      <div className={styles.text}>{`${index + 1}. ${name}`}</div>
      <div className={styles.controlsContainer}>
        <div className={styles.checkboxContainer}>
          <Checkbox
            checked={solved}
            color="primary"
            onClick={() => todosController.toggleSolved(index)}
          />
        </div>
        <div className={styles.buttonsContainer}>
          {buttonUp}
          {buttonDown}
          <button className={styles.button} onClick={() => todosController.remove(index)}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default TODO;
