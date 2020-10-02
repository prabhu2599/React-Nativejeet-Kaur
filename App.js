import React, { useState } from 'react';
import * as Fonts from 'expo-font'
import { AppLoading } from 'expo'
import { HomeStack } from "./routes/homeStack";
import {AboutStack} from "./routes/aboutStack"
import { AppNavigator } from './routes/drawer';


const getFonts= () => {
  return Fonts.loadAsync({
    'Raleway': require('./assets/fonts/Raleway-Regular.ttf'),
    'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf')
  })
}
export default function App() {
  const [fonts, setfonts] = useState(false)

  if(fonts) {
    return (
      <HomeStack />
      // <AboutStack />
      // <AppNavigator />
    )
  } else {
    return (
    <AppLoading 
    startAsync={getFonts}
    onFinish={() => setfonts(true)}
    />
)} 
}