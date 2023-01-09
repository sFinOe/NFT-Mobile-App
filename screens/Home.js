import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { useState } from "react";
import { auth } from "../db_firebase";
import { useNavigation } from "@react-navigation/native";

import { COLORS, NFTData } from "../constants";
import { StatusBar, NFTcard, HomeHeader } from "../components";

const Home = () => {
  return <SafeAreaView style={styles.Safe_View}></SafeAreaView>;
};

const styles = StyleSheet.create({
  Safe_View: {
    flex: 1,
  },
});

export default Home;
