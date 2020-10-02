import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from '../screens/about'

const { Navigator, Screen } = createStackNavigator();

const AboutNavigator = () => (
  <Navigator headerMode="float">
    {/* other options: "float", "screen", "None" */}
    <Screen name="About" 
    component={About} 
    options={{
    headerStyle: { backgroundColor: 'white' },
    headerTitleStyle: { color: '#000848' },
    headerTransparent: false,
    headerTintColor: '#000',
  }}/>
  </Navigator>
);

export const AboutStack = () => (
  <NavigationContainer>
    <AboutNavigator />
  </NavigationContainer>
);

export default AboutStack;

//// V2

// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import About from '../screens/about';

// const { Navigator, Screen } = createStackNavigator();


// export default function AboutStack () {
//   return (
//   <Navigator
//     headerMode='screen'
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#eee',
//       },
//       headerTintColor: '#444',
//       height: 60
//     }}
//   >
//     <Screen
//       name='About'
//       component={About}
//       options={{ title: 'About GameZone' }}
//     />
//   </Navigator>
// )};