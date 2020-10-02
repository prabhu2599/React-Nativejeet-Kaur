import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View  } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function TodoItem({ item , pressHandler}) {

  return(
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.todo}>
        <MaterialIcons name='delete' size={22} color="#751a35" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  todo: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor:'#ffe8e5',
    color:"#370518",
    height: 60,
    padding: 20,
    marginTop:5,
    borderColor: '#d28f33',
    borderRadius: 10,
    borderBottomWidth:1,
    borderStyle: 'dashed',
    borderWidth: 3,
    flexDirection: 'row'
  },
  itemText: {
    marginLeft: 10
  }
});