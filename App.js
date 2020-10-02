import React,{ useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import TodoItem from './components/todoItems';
import Header from './components/header';
import AddTodo from './components/addTodo'
import Sandbox from './components/sandbox'

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return (
        prevTodos.filter(todos => todos.key != key)
      )
    })
  }

  const submitHandler = (text) => {

    if(text.length > 3) {
      setTodos( (prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    } else {
      Alert.alert("Oops!", "text", [
        { text: "Ok", onPress: () => console.log("alert closed") }
      ])
    }

     
  }

  return (
    //<Sandbox />
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler = {submitHandler} />
        <View style={styles.lists}>
          <FlatList data={todos} 
          keyExtractor = {(item) => (item.key)}
          renderItem = { ({item}) => (
          <TodoItem item={item} pressHandler = {pressHandler} />
          )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d28f33',
  },
  content: {
    flex:1,
    padding: 40
  },
  lists: {
    marginTop: 20,
    flex:1,
  },
});
