/**
 * @packageDocumentation
 * @module Views/Components/TODOs
 * TODOs component.
 */

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { todoSelector } from '~/state/features/todoSlice';
import todoController from '~/controller/todos';
import internationalization from '~/internationalization';
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
      <div className={styles.title}>{internationalization.get('TODOS_TITLE')}</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          className={styles.input}
          id="outlined-basic"
          label="Todo"
          onChange={handleInput}
          size="small"
          value={todoInput}
          variant="outlined"
        />
        <Button className={styles.addButton} color="primary" type="submit" variant="contained">
          <AddIcon />
        </Button>
      </form>
      {todos.map((todo, index) => (
        <TODO key={index} index={index} name={todo.name} solved={todo.solved} />
      ))}
      <Button
        className={styles.lsButton}
        disableElevation
        onClick={() => todoController.saveInLocalStorage()}
        variant="contained"
      >
        LocalStorage
      </Button>
    </div>
  );
};

export default TODOs;
