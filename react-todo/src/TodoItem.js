import React from 'react'

export default class TodoItem extends React.Component {
  render () {
    return (
      <li className='list-group-item'>
        <input
          type='checkbox'
          checked={this.props.completed}
          onChange={this.props.toggleTodoComplete}
        />
          &ensp;
        <span style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          color: this.props.completed ? '#dadada' : 'initial'
        }}>
          {this.props.text}
        </span>
        <button
          className='btn btn-danger btn-sm float-right'
          onClick={this.props.removeTodo}
        >

          Delete
        </button>
      </li>
    )
  }
}
