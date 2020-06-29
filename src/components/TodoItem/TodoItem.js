import React from "react";

import Button from '../UI/Button/Button'
import classes from './TodoItem.module.css';

const TodoItem = props => {
    return (
        <div 
            className={classes.TodoItem}>
            <p 
                className={classes.Text}
                style={{ 
                    textDecoration: props.todo.isCompleted 
                    ? "line-through" 
                    : "",
                    fontStyle: props.todo.isCompleted 
                    ? "italic" 
                    : "normal"
                }}>
                {props.todo.text}
            </p>
            <Button 
                onClick={() => props.completeTodo(props.index)}>
                    {props.todo.isCompleted ? "UNDO" : "DONE"}
            </Button>
            <Button 
                onClick={() => props.removeTodo(props.index)}>
                    X
            </Button>

        </div>
    );
};

export default TodoItem;