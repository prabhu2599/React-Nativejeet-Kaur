import React, {useState} from 'react';
import { Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import {globalStyles} from '../styles/global'
import Card from '../shared/card'

export default function Home({navigation}) {

  // const onPressHandler = () => {
  //   navigation.push('Details')
  // }
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  return(
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}>Hey Homie this is home</Text> */}
      {/* <Button title="Reviews" onPress={onPressHandler} /> */}

      <FlatList data={reviews}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', {item}) } >
          <Card>
            <Text style={globalStyles.titleText}>{item.title} </Text>
          </Card>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}