import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, NFTData, SHADOWS, SIZE } from "../constants";
import assets from "../constants/assets";
import { CircleButton } from "./Button";
import { NFTtitle, SubInfo } from "./NFT_info";

const NFTcard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        <Image source={data.image} resizeMode="cover" style={styles.img_block} />
        <CircleButton imgUrl={assets.heart_icon} right={10} top={10} />
      </View>
      <View>
        <SubInfo bids={data.bids} ending_time={data.ending_time} />
      </View>
      <View style={{ width: "100%", padding: 10 }}></View>
      <NFTtitle title={data.name} creator={data.creator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    marginBottom: 10,
    margin: 17,
    ...SHADOWS.First_block,
  },
  cards: {
    height: 270,
    width: "100%",
  },
  img_block: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
});

export default NFTcard;
