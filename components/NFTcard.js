import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, NFTData, SHADOWS, SIZE } from "../constants";
import assets from "../constants/assets";
import { BidButton, CircleButton } from "./Button";
import { EthPrice, NFTtitle, SubInfo } from "./NFT_info";

const NFTcard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        <Image source={data.image} resizeMode="contain" style={styles.img_block} />
        <CircleButton imgUrl={assets.heart_icon} right={15} top={18} />
      </View>
      <View style={{ width: "100%", paddingBottom: 10 }}>
        <SubInfo bids={data.bids} ending_time={data.ending_time} />
        <View style={{ width: "100%", padding: 5 }}></View>
        <NFTtitle title={data.name} creator={data.creator} />
        <View style={styles.price_title}>
          <EthPrice price={data.price} />
          <BidButton
            handlePress={() => {
              navigation.navigate("Details", { data });
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    marginBottom: 10,
    margin: 17,
    ...SHADOWS.light,
    elevation: 6,
  },
  cards: {
    height: 200,
    width: "100%",
  },
  img_block: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  price_title: {
    width: "100%",
    marginTop: 9,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 8,
    paddingHorizontal: 15,
  },
});

export default NFTcard;
