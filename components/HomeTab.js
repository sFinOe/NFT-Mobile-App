import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Login from "../screens/login";
import { COLORS, NFTData, SHADOWS, SIZE, FONTS, ETH_icon } from "../constants";
import assets from "../constants/assets";
import { LinearGradient } from "expo-linear-gradient";
import Shop from "../screens/Shop";
import Favorites from "../screens/Favorites";
import Account from "../screens/Account";
import New_nft from "../screens/New_nft";

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 65,
          position: "absolute",
          bottom: 20,
          left: 30,
          right: 30,
          backgroundColor: "#fff",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image source={assets.Home_3} resizeMode="contain" style={{ width: 20, height: 20, tintColor: focused ? "#F24" : "#14213d" }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={assets.Shopping_Cart_2}
                resizeMode="contain"
                style={{ width: 20, height: 20, tintColor: focused ? "#F24" : "#14213d" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="New_nft"
        component={New_nft}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image source={assets.Add_Square} resizeMode="contain" style={{ width: 20, height: 20, tintColor: focused ? "#F24" : "#14213d" }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image source={assets.Favorite_Heart} resizeMode="contain" style={{ width: 20, height: 20, tintColor: focused ? "#F24" : "#14213d" }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image source={assets.User_Circle} resizeMode="contain" style={{ width: 20, height: 20, tintColor: focused ? "#F24" : "#14213d" }} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
