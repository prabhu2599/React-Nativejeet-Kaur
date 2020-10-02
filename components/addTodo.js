import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View  } from 'react-native';



export default function AddTodo({submitHandler}) {
  
  const [text, setText] = useState('')

  const changeHandler = (val) => {
    setText(val)
  }

  return(
    <View style={styles.input}>
      <View style={styles.addBox}>
      <TextInput
      style={{ height: 40, borderColor: '#e1e1e1', 
      borderWidth: 1,  marginBottom: 20, color:'#fff',borderStyle: 'dashed', }}
      placeholder='Add new Todo ..'
      onChangeText={changeHandler}
      />
      </View>
      <Button onPress={() => submitHandler(text)} title='add todo' color='#4ea2a2' borderBottomWidth='2'/>
    </View>
  )

}

const styles = StyleSheet.create({
  input: {
    color:'white',
    marginBottom: 20,
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: '#d4b95e',
    borderColor: '#ddd',
    borderRadius: 10,
    borderBottomWidth:1,
    borderWidth: 2
  },
  addBox: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 10,
    
  }
})