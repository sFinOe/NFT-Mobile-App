import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, NFTData, SHADOWS, SIZE } from "../constants";
import assets from "../constants/assets";

export const NFTtitle = ({ title, creator }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.Ubuntu_M,
          fontSize: 17,
          color: "#000",
          paddingLeft: 15,
          paddingBottom: 3,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.ABeeZee,
          fontSize: 12,
          color: "#464646",
          paddingLeft: 15,
        }}
      >
        By {creator}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={assets.ETH_icon} resizeMode="contain" style={{ width: 27, height: 27, marginLeft: 4 }} />
      <Text
        style={{
          fontFamily: FONTS.Ubuntu_M,
          fontSize: 15,
          color: "#000",
        }}
      >
        {" "}
        {price}
      </Text>
    </View>
  );
};

export const EndDate = ({ ending_time }) => {
  return (
    <View style={styles.endDate}>
      <Text
        style={{
          fontFamily: FONTS.ABeeZee,
          fontSize: 10,
          color: "#464646",
        }}
      >
        Ending In
      </Text>
      <Text
        style={{
          fontFamily: FONTS.Akshar_M,
          fontSize: 15,
          color: "#000",
          paddingTop: 2,
        }}
      >
        {ending_time}
      </Text>
    </View>
  );
};

export const ImgCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 45,
        height: 45,
        marginLeft: index == 0 ? 0 : -8,
        borderRadius: 45 / 2,
        borderWidth: 2,
        borderColor: "#FFF",
      }}
    />
  );
};

export const People = ({ bids }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {bids.slice(0, 3).map((imgUrl, index) => (
        <ImgCmp imgUrl={imgUrl.image} index={index} key={`User-${index}`} />
      ))}
    </View>
  );
};

export const SubInfo = ({ bids, ending_time }) => {
  return (
    <View style={styles.container}>
      <People bids={bids} />
      <EndDate ending_time={ending_time} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: -20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  endDate: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    ...SHADOWS.light,
    elevation: 6,
    maxWidth: "50%",
  },
});
