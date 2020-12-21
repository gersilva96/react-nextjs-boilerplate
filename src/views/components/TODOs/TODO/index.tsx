/**
 * @packageDocumentation
 * @module Views/Components/TODOs/TODO
 * Component that contaisn one TO DO.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { todoSelector } from '@state/features/todoSlice';
import todosController from '~/controller/todos';
import styles from './index.scss';

type PropsType = {
  index: number;
  name: string;
  solved: boolean;
};

const ButtonUp = (index: number) => (
  <button onClick={() => todosController.shift(index, index - 1)}>^</button>
);

const ButtonDown = (index: number) => (
  <button onClick={() => todosController.shift(index, index + 1)}>v</button>
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

  return (
    <div className={styles.todoContainer}>
      <div className={styles.text}>{`${props.index + 1} ${props.name} (${props.solved})`}</div>
      <div className={styles.buttonsContainer}>
        {buttonUp}
        {buttonDown}
        <button onClick={() => todosController.remove(props.index)}>-</button>
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
