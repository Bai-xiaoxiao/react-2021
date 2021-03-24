import React, { Component } from 'react'
import TodoList from './components/ToDoList'
import UseAxios from './components/UseAxios'

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoList />

        <UseAxios />
      </div>
    )
  }
}
