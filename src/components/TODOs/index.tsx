/**
 * @packageDocumentation
 * @module Views/Components/TODOs
 * TODOs component.
 */

import { useState, ChangeEvent, FormEvent } from 'react';

import { Card, CardContent, Button, TextField, Typography, List } from '@material-ui/core';
import { AddCircleOutline as AddCircleOutlineIcon } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import styles from './index.module.scss';
import TODO from './TODO';
import todoController from '~/controller/todos';
import i18n from '~/internationalization';
import { todoSelector } from '~/state/features/todoSlice';

const TODOs = (): JSX.Element => {
  const todos = useSelector(todoSelector);
  const [todoInput, setTodoInput] = useState('');
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoInput !== '') {
      todoController.add(todoInput);
      setTodoInput('');
    }
  };
  const handleSaveInLocalStorage = () => {
    const isSaved = todoController.saveInLocalStorage();
    if (isSaved) {
      Swal.fire({
        icon: 'success',
        text: i18n.get('TODOS_SAVE_IN_LOCAL_STORAGE_SUCCESS'),
      });
    } else {
      Swal.fire({
        icon: 'error',
        text: i18n.get('TODOS_SAVE_IN_LOCAL_STORAGE_ERROR'),
      });
    }
  };

  return (
    <div className={styles.container} data-testid="todos-container">
      <Typography className={styles.title} variant="h4" align="center">
        {i18n.get('TODOS_TITLE')}
      </Typography>
      <Card className={styles.card}>
        <CardContent className={styles.addTodoCardContent}>
          <Typography component="h2" variant="h5">
            {i18n.get('TODOS_ADD_TODO_TITLE')}
          </Typography>
          <form className={styles.form} onSubmit={handleSubmit}>
            <TextField className={styles.input} onChange={handleInput} value={todoInput} />
            <div className={styles.buttonGroup}>
              <Button className={styles.button} onClick={handleSaveInLocalStorage} size="small" variant="contained">
                {i18n.get('TODOS_SAVE_IN_LOCAL_STORAGE_BUTTON')}
              </Button>
              <Button
                className={styles.button}
                color="primary"
                startIcon={<AddCircleOutlineIcon />}
                type="submit"
                variant="contained"
              >
                {i18n.get('TODOS_ADD_TODO_BUTTON')}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <Card className={styles.card}>
        <CardContent className={styles.todoListCardContent}>
          <Typography component="h2" variant="h5">
            {i18n.get('TODOS_TODO_LIST_TITLE')}
          </Typography>
          {todos.length === 0 ? (
            <Typography align="center" className={styles.emptyList} variant="body1">
              {i18n.get('TODOS_TODO_LIST_EMPTY')}
            </Typography>
          ) : (
            <List>
              {todos.map((todo, index) => (
                <TODO key={todo.name} index={index} name={todo.name} solved={todo.solved} />
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TODOs;
