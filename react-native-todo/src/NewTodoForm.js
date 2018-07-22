import React from 'react'
import { Platform, StyleSheet, View, TextInput, Button } from 'react-native'

export default class NewTodoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleChange (text) {
    this.setState({
      text: text
    })
  }

  handleClick (event) {
    this.props.addTodo(this.state.text)
    this.setState({ text: '' })
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.handleChange.bind(this)}
          value={this.state.text}
        />

        <View style={styles.button}>
          <Button
            style={styles.button}
            title='Add Todo'
            onPress={this.handleClick.bind(this)}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 40
  },
  input: {
    flex: 2,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
    borderColor: '#f1f1f1',
    borderWidth: Platform.OS == 'ios' ? 2 : 0,
  },
  button: {
    flex: 1,
    justifyContent: 'center'
  }
})
