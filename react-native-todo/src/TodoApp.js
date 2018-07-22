import React from 'react'
import TodoList from './TodoList'
import NewTodoForm from './NewTodoForm'
import uuid from 'uuid/v4'

export default class TodoApp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: [
        { id: uuid(), text: "Hello World", completed: false },
        { id: uuid(), text: "Hello World 2", completed: false }
      ]
    }
  }

  addTodo (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  }

  removeTodo (id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodoComplete (id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        let newTodo = {...todo}
        if (newTodo.id === id) {
          newTodo.completed = !todo.completed
        }
        return newTodo
      })
    })
  }

  render () {
    return (
      <React.Fragment>
        <NewTodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList
          todos={this.state.todos}
          removeTodo={this.removeTodo.bind(this)}
          toggleTodoComplete={this.toggleTodoComplete.bind(this)}
        />
      </React.Fragment>
    )
  }
}
