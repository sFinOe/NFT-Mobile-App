import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, NFTData, SHADOWS, SIZE } from "../constants";
import assets from "../constants/assets";
import { BidButton, CircleButton } from "./Button";
import { EthPrice, NFTtitle, SubInfo } from "./NFT_info";

const Details_Desc = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.title_css}>
        <NFTtitle title={data.name} creator={data.creator} FontSize={19} FontSize_Creator={13} />
        <View style={styles.price_css}>
          <EthPrice price={data.price} FontSize={17} width={30} height={30} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title_css: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  price_css: {
    marginRight: 22,
  },
});

export default Details_Desc;
