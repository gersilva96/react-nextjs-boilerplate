/**
 * @packageDocumentation
 * @module Views/Components/TODOs
 * TODOs component.
 */

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Button, TextField, Typography, List } from '@material-ui/core';
import { AddCircleOutline as AddCircleOutlineIcon } from '@material-ui/icons';
import { todoSelector } from '~/state/features/todoSlice';
import todoController from '~/controller/todos';
import i18n from '~/internationalization';
import styles from './index.scss';
import TODO from './TODO';

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
            <TextField
              className={styles.input}
              onChange={handleInput}
              value={todoInput}
            ></TextField>
            <div className={styles.buttonGroup}>
              <Button
                className={styles.button}
                onClick={todoController.saveInLocalStorage}
                size="small"
                variant="contained"
              >
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
                <TODO key={index} index={index} name={todo.name} solved={todo.solved} />
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TODOs;
