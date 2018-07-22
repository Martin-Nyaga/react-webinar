import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TodoApp from './src/TodoApp.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    padding: 20
  }
});
