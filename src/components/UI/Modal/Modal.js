import React, { useState } from 'react';

import TodoInput from '../../TodoInput/TodoInput';
import classes from "./Modal.module.css";
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        props.getName(value);
        setValue("");
    };

    return (
        <div>
            <Backdrop />
            <div className={classes.Modal}>
                <form 
                    onSubmit={handleSubmit}>
                    <p className={classes.Title}>Enter your name</p>
                    <TodoInput
                        type="text"
                        placeholder="Renseigner votre nom"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </form>
            </div>
        </div>
    );
}

export default Modal;