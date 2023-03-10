import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Keyboard } from "react-native";
import Task from "./components/Task";
import React, { useState, useEffect } from "react";
import { NavigationContainer, StackActions, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator, createStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Login from "./screens/login";
import Details from "./screens/Details";
import HomeTab from "./components/HomeTab";
import Register from "./screens/Register";
const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const App = () => {
  /* Staring From Here !!!!!! */

  // const [data, setData] = useState([]);
  // const [LoadingData, setLoadingData] = useState(false);

  // /*******  fetch from server database  *********/

  // const fetchData = async (type, id) => {
  //   try {
  //     const response = await fetch(`http://10.30.114.187:8383/${type}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: id,
  //       }),
  //     });
  //     const data = await response.json();
  //     setData(data);
  //     setLoadingData(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData("select", "6");
  // }, []);
  // /**************************/

  const [loaded] = useFonts({
    ABeeZee_Iutalic: require("./assets/fonts/ABeeZee-Italic.ttf"),
    ABeeZee_Regular: require("./assets/fonts/ABeeZee-Regular.ttf"),
    Akshar: require("./assets/fonts/Akshar-VariableFont_wght.ttf"),
    Font_Awesome_5_Regular: require("./assets/fonts/Font-Awesome-5-Free-Regular-400.otf"),
    Ponnala_Regular: require("./assets/fonts/Ponnala-Regular.ttf"),
    Ubuntu_Italic: require("./assets/fonts/Ubuntu-Italic.ttf"),
    Ubuntu_Regular: require("./assets/fonts/Ubuntu-Regular.ttf"),
    Ubuntu_Medium: require("./assets/fonts/Ubuntu-Medium.ttf"),
    Ubuntu_Bold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    Akshar_Medium: require("./assets/fonts/Akshar-Medium.ttf"),
    Font_Awesome_5_Solid: require("./assets/fonts/Font-Awesome-5-Free-Solid-900.otf"),
    Font_Awesome_5_Brands_Regular_400: require("./assets/fonts/Font-Awesome-5-Brands-Regular-400.otf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
