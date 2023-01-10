import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS, NFTData, SHADOWS, SIZE } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity style={styles(props).container} onPress={handlePress}>
      <Image source={imgUrl} resizeMode="contain" style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
  );
};

const styles = (props) =>
  StyleSheet.create({
    container: {
      width: 40,
      height: 40,
      backgroundColor: "#fff",
      position: "absolute",
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      ...SHADOWS.First_block,
      ...props,
    },
  });
