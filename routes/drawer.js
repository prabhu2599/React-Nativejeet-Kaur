// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// import HomeStack  from './homeStack';
// import AboutStack from './aboutStack';

// const { Navigator, Screen } = createDrawerNavigator();

// export const RootDrawerNavigator = () => (
//   <Navigator headerMode="float">
//     {/* other options: "float", "screen", "None" */}
//     <Screen name="Home" 
//     component={HomeStack} 
//     options={{
//     headerStyle: { backgroundColor: 'white' },
//     headerTitleStyle: { color: '#000848' },
//     headerTransparent: false,
//     headerTintColor: '#000',
//   }}/>
//     <Screen name="About" 
//     component={AboutStack}
//     options={{
//       headerStyle: { backgroundColor: 'white' },
//       headerTitleStyle: { color: '#000848' },
//       headerTransparent: false,
//       headerTintColor: '#000',
//     }}
//      />
//   </Navigator>
// );

// export const AppNavigator = () => (
//   <NavigationContainer>
//     <RootDrawerNavigator />
//   </NavigationContainer>
// );

// export default AppNavigator;

/// V2

// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// import {HomeStack} from './homeStack';
// import {AboutStack} from './aboutStack';

// const { Navigator, Screen } = createDrawerNavigator();

// export const RootDrawerNavigator = () => (
//   <Navigator initialRouteName='Home'>
//     <Screen
//       name='Home'
//       component={HomeStack}
//     />
//     <Screen
//       name='About'
//       component={AboutStack}
//     />
//   </Navigator>
// );

// export const AppNavigator = () => (
//   <NavigationContainer>
//     <RootDrawerNavigator />
//   </NavigationContainer>
// );

// export default AppNavigator;

/// V3

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {HomeStack} from './homeStack';
import {AboutStack} from './aboutStack';

const Stack = createDrawerNavigator();


export const AppNavigator = () => 
{
    return(
        <NavigationContainer>
          <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeStack} />
                <Stack.Screen name="Settings" component={AboutStack} />
          </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;