import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name, setName] = useState ('pg');
  const [person, setPerson] = useState({name: 'mario', age: '40'})
  const ifclicked = () => {
    setName('Prabhu ji')
    setPerson({name:'hanji', age: '49'})
  }


  return (
    <View style={styles.container}>
      <Text style={styles.colorText}>Enter Name</Text>
      <TextInput style ={styles.input} 
      placeholder='e.g prabhu ji'
      onChangeText={(val) => setPerson({name:val})}
      />

      <Text style={styles.colorText}>Enter Age</Text>
      <TextInput style ={styles.input} 
      placeholder='e.g 22'
      keyboardType='numeric'
      onChangeText={(val) => setPerson({age:val})}
      />
      
      <Text style={styles.colorText}>Name: {person.name}, Age: {person.age}</Text>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#fff",
    flex: 1,
    backgroundColor: "#000080",
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorText: {    
    color: '#ffe4e1',   
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    color: "#bc8f8f",
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200
  }
})