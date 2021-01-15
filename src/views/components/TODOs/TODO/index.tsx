/**
 * @packageDocumentation
 * @module Views/Components/TODOs/TODO
 * Component that contaisn one TO DO.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';

import { todoSelector } from '~/state/features/todoSlice';
import todosController from '~/controller/todos';
import styles from './index.scss';

type PropsType = {
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
const TODO = (props: PropsType): JSX.Element => {
  const { todos } = useSelector(todoSelector);
  const lastIndex = todos.length - 1;

  const buttonUp = props.index === 0 ? null : ButtonUp(props.index);
  const buttonDown = props.index === lastIndex ? null : ButtonDown(props.index);

  const todoClass = props.solved ? styles.todoSolved : styles.todoUnsolved;

  return (
    <div className={todoClass}>
      <div className={styles.text}>{`${props.index + 1}.  ${props.name}`}</div>
      <div className={styles.controlsContainer}>
        <div className={styles.checkboxContainer}>
          <Checkbox
            checked={props.solved}
            color="primary"
            onClick={() => todosController.toggleSolved(props.index)}
          />
        </div>
        <div className={styles.buttonsContainer}>
          {buttonUp}
          {buttonDown}
          <button className={styles.button} onClick={() => todosController.remove(props.index)}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

TODO.propTypes = {
  name: PropTypes.string.isRequired,
  solved: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default TODO;
