import { View, Text, Image, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";
import React from "react";
import { COLORS, FONTS, NFTData, SHADOWS, SIZE } from "../constants";
import assets from "../constants/assets";

const HomeHeader = ({ OnSearch }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.Account_field}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Image
            source={assets.valid_icon}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
          <Text style={{ color: "#fff", fontFamily: FONTS.Ubuntu_M, fontSize: 18 }}>ProNef</Text>
        </View>
        <Image
          source={assets.account_1}
          resizeMode="contain"
          style={{
            width: 48,
            height: 48,
            borderRadius: 48 / 2,
            borderWidth: 2,
            borderColor: "#ffd60a",
          }}
        />
      </View>
      <View style={styles.Search_Title}>
        <Text
          style={{
            fontFamily: FONTS.ABeeZee,
            fontSize: 12,
            color: "#fff",
            marginTop: 5,
          }}
        >
          Hello Zakaria 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.Font_Awesome_5_S,
            fontSize: 19,
            color: "#fff",
            marginTop: 10,
          }}
        >
          Let’s Find Your Dream Art
        </Text>
      </View>
      <View style={styles.Search_Bar}>
        <Image
          source={assets.search_icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
          }}
        />
        <TextInput placeholder="Search NFTs" placeholderTextColor="#ccc" style={{ flex: 1, marginLeft: 10, color: "#fff" }} onChangeText={OnSearch} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 12,
    paddingTop: 20,
    paddingHorizontal: 19,
    backgroundColor: COLORS.primary,
    width: "100%",
  },
  Account_field: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "#000",
    width: "100%",
  },
  Search_Title: {
    // backgroundColor: "#5FF",
    width: "100%",
    marginVertical: 10, // between title and hello zakaria
  },
  Search_Bar: {
    marginTop: 12, // between search bar and title
    backgroundColor: "#536469",
    width: "100%",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});

export default HomeHeader;
