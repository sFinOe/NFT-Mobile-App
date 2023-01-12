import { View, Text, Image, StyleSheet } from "react-native";
import { React, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, NFTData, SHADOWS, SIZE, FONTS, ETH_icon } from "../constants";
import assets from "../constants/assets";
import { BidButton, CircleButton } from "./Button";
import { EthPrice, NFTtitle, SubInfo } from "./NFT_info";

const Details_Bid = ({ data, index, Bid_Lenth }) => {
  return (
    <View style={styles(index, Bid_Lenth).container}>
      <Image
        source={data.image}
        resizeMode="contain"
        style={{ width: 50, height: 50, borderRadius: 50 / 2, borderWidth: 2, borderColor: index == 0 ? "#FFD700" : "#003566" }}
      />
      <View style={styles(index, Bid_Lenth).top_bids}>
        <View>
          <Text style={{ fontFamily: FONTS.Ubuntu_M, fontSize: 13.4, color: "#000" }}>Bid Place By {data.name}</Text>
          <Text style={{ fontFamily: FONTS.Ubuntu, fontSize: 10.4, color: "#3D3D3D", marginTop: 2 }}>{data.date}</Text>
        </View>
        <EthPrice price={data.price} FontSize={14} width={26} height={26} />
      </View>
    </View>
  );
};

const styles = (index, Bid_Lenth) =>
  StyleSheet.create({
    container: {
      width: "100%",
      paddingHorizontal: 14,
      paddingBottom: 13,
      flexDirection: "row",
      // alignItems: "center",
      marginBottom: index == Bid_Lenth - 1 ? 62 : 0,
    },

    top_bids: {
      justifyContent: "space-between",
      flexDirection: "row",
      flex: 2,
      width: "82%",
      paddingLeft: 25,
      paddingRight: 7,
      alignItems: "center",
    },
  });

export default Details_Bid;
