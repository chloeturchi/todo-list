import React from 'react'
import PropTypes from 'prop-types'

import classes from './Todo.module.css'

const Todo = ({ onClick, completed, text }) => (
      <li 
        className={classes.Todo}
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          backgroundColor: completed ? 'rgb(238, 199, 199)' : 'rgb(199, 238, 204)'
        }}>
        {text}
      </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo