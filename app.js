import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button } from "react-native";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Platform,
 } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("handeePressed se aara");
  };

  return {
    /* <SafeAreaView style={styles.container}>
       <Text style={styles.text} onPress={handlePress}>
        Mosh ki jai
      </Text>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.text}>
          <Image
            blurRadius={0}
            fadeDuration={2000}
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300",
            }}
          />
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" /> 
      <Button
        title="click me"
        color="#2F4F4F"
        onPress={() =>
          Alert.alert("hogaya title", "hogaya message", [
            { text: "YEs", onPress: () => console.log("message 1") },
            { text: "no", onPress: () => console.log("message 2") },
          ])
        }
      />
      <View style={{ backgroundColor: 'dodgerblue' , flex: 0.5}}>

      </View>
    </SafeAreaView> */
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  text: {
    //flex:3,
    alignItems: "center",
    color: "#fff",
    fontSize: 28,
  },
});
