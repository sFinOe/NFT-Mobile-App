import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { useState } from "react";
import { auth } from "../db_firebase";
import { useNavigation } from "@react-navigation/native";
import { COLORS, NFTData } from "../constants";
import { FocusStatusBar, NFTcard, HomeHeader } from "../components";

/*
FocusStatusBar : contains bool is StatsBar is Focused or Not if Not Return NULL to Hide it
*/

const Home = () => {
  return (
    <SafeAreaView style={styles.Safe_View}>
      <FocusStatusBar background={COLORS.primary} />
      <View style={styles.container}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            ListHeaderComponent={<HomeHeader />}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <NFTcard data={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: -1 }}>
          <View style={{ height: "40%", backgroundColor: COLORS.primary }} />
          <View style={{ backgroundColor: COLORS.white, flex: 1 }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Safe_View: {
    flex: 1,
  },

  container: {
    flex: 1,
  },
});

export default Home;
