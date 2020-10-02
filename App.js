import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState ('pg');
  const [person, setPerson] = useState({name: 'mario', age: '40'})
  const ifclicked = () => {
    setName('Prabhu ji')
    setPerson({name:'hanji', age: '49'})
  }


  return (
    <View style={styles.container}>
      <Text style={styles.Purple}>My name is {person.name} and age is {person.age}</Text>
      <Text></Text>
      <StatusBar style="auto" />
      <View style = {styles.buttonContainer}>
        <Button title="Update State" onPress={ifclicked}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Purple: {    
    color: '#9C27B0',   
  },
  buttonContainer: {
    marginTop: 20
  }
})