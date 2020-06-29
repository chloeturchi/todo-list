import React from 'react'
import classes from './MainTitle.module.css'

const mainTitle = (props) => (
    <h1 
        className={classes.mainTitle}>
        {props.children}
    </h1>
)

export default mainTitle