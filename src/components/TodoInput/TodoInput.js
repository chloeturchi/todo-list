import React from "react";

import classes from './TodoInput.module.css';

const TodosInput = props => {
    return (
        <input 
            className={classes.Input}
            onChange={props.onChange}
            value={props.value} 
            type={props.value} 
            placeholder={props.placeholder}/>
    );
};

export default TodosInput;