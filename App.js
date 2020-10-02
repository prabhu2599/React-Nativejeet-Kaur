import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { LinearGradient } from 'expo'

const bgcolors = ['#008080','#0000ff','#00008b','#8b0000','#6b8e23','#808000','#4682b4'];

export default function App() {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [sum, setSum] = useState(0)

  const onAddClick = () => {
    let sum = Number(a) + Number(b);
    setSum(sum)
  }
  return (
    <View style={StyleSheet.compose(styles.container, {backgroundColor: bgcolors[Math.floor(Math.random() * bgcolors.length)]})}>
      <View>
        <Text style={styles.header}>DynaAdd</Text>
        <Text style={styles.developer}>.* Developed by PG *.</Text>
      </View>
      <View style={styles.body}>
      <TextInput style ={styles.input} 
      placeholder='1st number'
      keyboardType='numeric'
      onChangeText={(val) => setA(val)}
      />

      <Text style={styles.colorText}> + </Text>
      <TextInput style ={styles.input} 
      placeholder='2nd number'
      keyboardType='numeric'
      onChangeText={(val) => setB(val)}
      />
      </View>
      <Text style={styles.colorSum}>{Number(a) + Number(b)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#fff",
    flex: 1,
    alignItems: 'center',
  },
  body: {
    justifyContent: 'center',
    color: "#fff",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorText: {    
    color: '#ffe4e1',
    fontSize: 70   
  },
  colorSum: {    
    color: '#ffe4e1',  
    fontSize: 170,
    justifyContent: 'bottom' 
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    color: "#fffafa",
    borderWidth: 1,
    borderColor: "#ffdab9",
    padding: 10,
    margin: 20,
    width: 200
  },
  header: {
    fontWeight: 'bold',
    alignItems: 'top',
    color: "#fff",
    fontSize: 50,
    fontFamily: 'lucida grande',
    marginTop: 20
  },
  developer: {
    fontWeight: 'bold',
    fontFamily: 'verdana',
    fontSize: 10,
    color: "#ffe4b5",
    alignItems: 'center',
    justifyContent: 'center',
  }
})