import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Keyboard } from "react-native";
import Task from "./components/Task";
import React, { useState } from "react";
import { NavigationContainer, StackActions, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator, createStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Login from "./screens/login";
import Details from "./screens/Details";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const App = () => {
  /* Staring From Here !!!!!! */

  const Stack = createNativeStackNavigator();

  const [loaded] = useFonts({
    ABeeZee_Iutalic: require("./assets/fonts/ABeeZee-Italic.ttf"),
    ABeeZee_Regular: require("./assets/fonts/ABeeZee-Regular.ttf"),
    Akshar: require("./assets/fonts/Akshar-VariableFont_wght.ttf"),
    Font_Awesome_5_Regular: require("./assets/fonts/Font-Awesome-5-Free-Regular-400.otf"),
    Ponnala_Regular: require("./assets/fonts/Ponnala-Regular.ttf"),
    Ubuntu_Italic: require("./assets/fonts/Ubuntu-Italic.ttf"),
    Ubuntu_Regular: require("./assets/fonts/Ubuntu-Regular.ttf"),
    Ubuntu_Medium: require("./assets/fonts/Ubuntu-Medium.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
