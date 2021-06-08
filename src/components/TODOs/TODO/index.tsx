/**
 * @packageDocumentation
 * @module Views/Components/TODOs/TODO
 * Component that contaisn one TO DO.
 */

import { Checkbox, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core';
import {
  Delete as DeleteIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
} from '@material-ui/icons';
import { useSelector } from 'react-redux';

import styles from './index.module.scss';
import todosController from '~/controller/todos';
import { todoSelector } from '~/state/features/todoSlice';

export type PropsType = {
  index: number;
  name: string;
  solved: boolean;
};

/**
 * Button to go up in the list.
 */
const ButtonUp = (index: number) => (
  <IconButton aria-label="up todo" edge="end" onClick={() => todosController.shift(index, index - 1)}>
    <ArrowUpwardIcon fontSize="small" />
  </IconButton>
);

/**
 * Button to go down in the list.
 */
const ButtonDown = (index: number) => (
  <IconButton aria-label="down todo" edge="end" onClick={() => todosController.shift(index, index + 1)}>
    <ArrowDownwardIcon fontSize="small" />
  </IconButton>
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

  const todoClass = solved ? styles.todoSolved : undefined;

  return (
    <ListItem key={index} button>
      <ListItemIcon>
        <Checkbox
          edge="start"
          color="primary"
          checked={solved}
          onClick={() => todosController.toggleSolved(index)}
          tabIndex={-1}
        />
      </ListItemIcon>
      <ListItemText className={todoClass} id={index.toString()} primary={name} />
      <ListItemIcon>
        {buttonUp}
        {buttonDown}
        <IconButton aria-label="delete todo" color="secondary" edge="end" onClick={() => todosController.remove(index)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
};

export default TODO;
