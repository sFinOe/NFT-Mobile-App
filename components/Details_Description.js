import { View, Text, Image, StyleSheet } from "react-native";
import { React, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, NFTData, SHADOWS, SIZE, FONTS } from "../constants";
import assets from "../constants/assets";
import { BidButton, CircleButton } from "./Button";
import { EthPrice, NFTtitle, SubInfo } from "./NFT_info";

const Details_Desc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 150));
  const [ReadMore, setReadMore] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.title_css}>
        <NFTtitle title={data.name} creator={data.creator} FontSize={19} FontSize_Creator={13} />
        <View style={{ marginRight: 24 }}>
          <EthPrice price={data.price} FontSize={17} width={30} height={30} />
        </View>
      </View>
      <View style={{ width: "100%", paddingHorizontal: 14, paddingTop: 14, paddingBottom: 5 }}>
        <Text style={{ fontFamily: FONTS.Ubuntu_M, fontSize: 14, color: "#000" }}>Description</Text>
        <Text style={{ paddingVertical: 10, fontFamily: FONTS.Ubuntu, fontSize: 13, color: "#464646", lineHeight: 16 }}>
          {text}
          {!ReadMore && data.description.length > 150 ? "..." : "."}
          <Text
            style={{ fontFamily: FONTS.Ubuntu_M, fontSize: 13, color: "#000" }}
            onPress={() => {
              if (!ReadMore) {
                setText(data.description);
                setReadMore(true);
              } else {
                setText(data.description.slice(0, 150));
                setReadMore(false);
              }
            }}
          >
            {data.description.length > 150 && (ReadMore ? " Show Less" : " Read More")}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title_css: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default Details_Desc;
