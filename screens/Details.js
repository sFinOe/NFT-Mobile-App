import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import { COLORS, FONTS, NFTData, SHADOWS, SIZE } from "../constants";
import assets from "../constants/assets";
import { FocusStatusBar, NFTcard, HomeHeader } from "../components";
import { SubInfo } from "../components/NFT_info";
import { CircleButton, BidButton, Details_Bid, Details_Desc } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import react from "react";

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 340,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={data.image}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <CircleButton
        imgUrl={assets.left_icon}
        handlePress={() => navigation.goBack()}
        Width={22}
        Height={22}
        left={17}
        top={17}
        width={40}
        height={40}
        borderRadius={40 / 2}
      />
      <CircleButton imgUrl={assets.heart_icon} Width={22} Height={22} right={17} top={17} width={40} height={40} borderRadius={40 / 2} />
    </View>
  );
};

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <FocusStatusBar barStyle="dark-content" translucent={true} backgroundColor="#fff" />
      <View style={styles.Bid_button}>
        <BidButton marginBottom={23} paddingVertical={14} paddingLeft={32} paddingRight={32} fontSize={16} />
      </View>
      <FlatList
        data={data.bids}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <Details_Bid data={item} index={index} Bid_Lenth={data.bids.length} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo bids={data.bids} ending_time={data.ending_time} />
            <View style={{ paddingVertical: 18 }}>
              <Details_Desc data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontFamily: FONTS.Ubuntu_M,
                    fontSize: 14,
                    color: "#000",
                    paddingHorizontal: 14,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </React.Fragment>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Bid_button: {
    zIndex: 1,
    flex: 1,
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
});

export default Details;
