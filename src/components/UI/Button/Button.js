import React from 'react'

import classes from './Button.module.css'

const Button = ({onClick}) => (
    <button 
        className={classes.Button}
        onClick={onClick}>X
    </button>
)

export default Button
