import React from 'react'
import TodoItem from './TodoItem'

import { FlatList } from 'react-native'

export default class TodoList extends React.Component {

  renderItem (row) {
    let item = row.item
    return (
      <TodoItem
        {...item}
        removeTodo={() => this.props.removeTodo(item.id)}
        toggleTodoComplete={() => this.props.toggleTodoComplete(item.id)}
      />
    )
  }

  render () {
    return (
      <FlatList
        data={this.props.todos}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={
          (todo) => todo.id
        }
      />
    )
  }
}
