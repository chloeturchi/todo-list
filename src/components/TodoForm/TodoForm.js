import React, { useState } from "react";

import TodoInput from '../TodoInput/TodoInput';
import classes from './TodoForm.module.css'

const TodoForm = props => {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      props.addTodo(value);
      setValue("");
    };
  
    return (
      <form 
        className={classes.Form}
        onSubmit={handleSubmit}>
        <TodoInput
          type="text"
          placeholder="Renseigner un item"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }

  export default TodoForm;