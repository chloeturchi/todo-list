import React from 'react'

import Footer from './Footer/Footer'
import AddTodo from '../containers/AddTodo/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import MainTitle from '../components/MainTitle/MainTitle';

const todoListApp = () => (
  <div>
    <MainTitle>Todo-List</MainTitle>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default todoListApp