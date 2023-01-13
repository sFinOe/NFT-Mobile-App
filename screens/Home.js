import { auth } from "../db_firebase";
import { React, useState } from "react";
import { COLORS, NFTData } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { FocusStatusBar, NFTcard, HomeHeader } from "../components";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, KeyboardAvoidingView } from "react-native";

/*
FocusStatusBar : contains bool is StatsBar is Focused or Not if Not Return NULL to Hide it
*/

const Home = () => {
  const [nftData, setnftData] = useState(NFTData);

  const Search_handle = (value) => {
    if (!value.length) return setnftData(NFTData);

    const filter_nft = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));

    if (filter_nft.length) {
      setnftData(filter_nft);
    } else {
      setnftData(NFTData);
    }
  };
  return (
    <SafeAreaView style={styles.Safe_View}>
      <FocusStatusBar backgroundColor={"#10272E"} />
      <View style={styles.container}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            ListHeaderComponent={<HomeHeader OnSearch={Search_handle} />}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <NFTcard data={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: -1 }}>
          <View
            style={{
              height: 300,
              backgroundColor: COLORS.primary,
            }}
          />
          <View style={{ backgroundColor: COLORS.white, flex: 1 }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Safe_View: {
    flex: 1,
  },

  container: {
    flex: 1,
  },
});

export default Home;
