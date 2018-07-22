import React from 'react'

import { StyleSheet, TouchableHighlight, View, Button, Text } from 'react-native'
import CheckBox from 'react-native-check-box'

const TodoItem = (props) => {
  return (
    <TouchableHighlight>
      <View style={styles.container}>
        <View style={styles.checkbox}>
          <CheckBox
						checkBoxColor={props.completed ? '#f1f1f1' : '#333'}
            onClick={props.toggleTodoComplete}
            isChecked={props.completed}
          ></CheckBox>
        </View>
        <View style={styles.text} onClick={props.toggleTodoComplete}>
          <Text style={props.completed ? styles.textCompleted : {}}>{props.text}</Text>
        </View>
        <Button
          style={styles.button}
          onPress={props.removeTodo}
          title="Delete" />
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1
  },
  checkbox: {
    flex: 1,
    justifyContent: 'center'
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: '#dadada'
  },
  text: {
    flex: 6,
    justifyContent: 'center'
  },
  button: {
    flex: 2
  }
})

export default TodoItem
