import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Login from "../screens/login";

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};

export default HomeTab;
