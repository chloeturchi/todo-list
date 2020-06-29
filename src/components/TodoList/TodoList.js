import React from 'react';

import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import classes from './TodoList.module.css';

import Button from '../UI/Button/Button';
import Aux from '../../hoc/Aux/Aux';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <ul 
    className={classes.List}>
    {todos.map(todo => (
      <Aux>
        <Todo 
          key={todo.id} 
          {...todo} 
          onClick={() => toggleTodo(todo.id)}
        />
        <Button
          onClick={() => deleteTodo(todo.id)}>
            X
        </Button>
      </Aux>
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList