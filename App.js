import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    {name:'prabhu', id:1},
    {name:'hanji', id:2},
    {name:'khanjan', id:3},
    {name:'sarika', id:4},
    {name:'krish', id:5},
    {name:'patt', id:6}
  ]);


  return (
    <View style={styles.container}>
      <Text style={styles.header}>LISTS HERE BABE</Text>

      <FlatList data={people} 
      keyExtractor = {(item) => (item.id)}
      renderItem = { ({item }) => (
      <Text style={styles.item}>{item.name}</Text>
      )}
      />




      {/* <ScrollView>
      {people.map((item) => (

          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
      ))}
      </ScrollView> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 24,
    padding: 40,
    backgroundColor: "pink",
    fontSize: 24,
    borderRadius: 20
  },
  header: {
    color: "white",
    fontSize: 30
  }
});
