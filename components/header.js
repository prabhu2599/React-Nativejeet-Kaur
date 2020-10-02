import React from 'react';
import { ColorPropType, StyleSheet, Text, View  } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Todos</Text>
      <Text style={styles.sub}>*-- Touch to delete the finished the task --*</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 10,
    backgroundColor: '#751a35',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold'
  },
  sub : {
    padding: 4,
    textAlign: 'center',
    color: '#fff',
    fontSize: 10,
  }
})