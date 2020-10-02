import React from 'react';
import { Text, View } from 'react-native';
import {globalStyles} from '../styles/global'
import Card from '../shared/card'


export default function About() {
  return(
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>Hey Homie this is about</Text>
      </Card>
    </View>
  )
};
