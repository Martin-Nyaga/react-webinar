import React from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {

  render () {
    return (
      <div className='row'>
        <div className='col-sm-12'>
          <ul className='list-group'>
            {this.props.todos.map(todo => (
              <TodoItem
                key={todo.id}
                {...todo}
                removeTodo={() => this.props.removeTodo(todo.id)}
                toggleTodoComplete={() => this.props.toggleTodoComplete(todo.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
