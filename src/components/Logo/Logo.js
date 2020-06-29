import React from 'react';

import todoLogo from '../../assets/images/todo-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div 
        className={classes.Logo} 
        style={{height: props.height}}>

        <img 
        src={todoLogo} 
        alt="todoLogo"
        />

    </div>
);

export default logo;