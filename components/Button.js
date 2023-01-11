import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, NFTData, SHADOWS, SIZE } from "../constants";

export const BidButton = ({ handlePress, fontSize, ...props }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: "#000",
        padding: 8,
        paddingRight: 18,
        paddingLeft: 18,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.First_block,
        ...props,
        elevation: 6,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.Ubuntu_M,
          fontSize,
          color: "#fff",
        }}
      >
        Place a Bid
      </Text>
    </TouchableOpacity>
  );
};

export const CircleButton = ({ imgUrl, handlePress, Width, Height, BorderR, ...props }) => {
  return (
    <TouchableOpacity style={styles(props).container} onPress={handlePress}>
      <Image source={imgUrl} resizeMode="contain" style={{ width: Width, height: Height }} />
    </TouchableOpacity>
  );
};

const styles = (props) =>
  StyleSheet.create({
    container: {
      // width: 40,
      // height: 40,
      backgroundColor: "#fff",
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      ...SHADOWS.First_block,
      elevation: 6,
      ...props,
    },
  });
