import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {globalStyles} from '../styles/global'
import Card from '../shared/card'

export default function ReviewDetails({ route, navigation }) {
  const { item } = route.params

  return (
    <View style={globalStyles.container}>
      <Card>
      <Text style={globalStyles.titleText}>{item.key}. {item.title}</Text>
      </Card>
      <Card>
      <Text style={globalStyles.para}>{item.body}</Text>
      <View style={styles.rating}>
        <Text style={globalStyles.para}>Rating: {item.rating}/5</Text>   
      </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
});
