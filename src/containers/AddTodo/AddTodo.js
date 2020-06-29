import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../../store/actions/index'
import classes from './AddTodo.module.css'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        className={classes.Form}
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input 
          className={classes.Input}
          placeholder="Add a new todo"
          ref={node => (input = node)} />
        <button 
          className={classes.Button}
          type="submit">
            Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)