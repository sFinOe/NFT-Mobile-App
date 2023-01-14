import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import { auth } from "../db_firebase";
import HomeTab from "../components/HomeTab";
import { COLORS, FONTS, NFTData, SHADOWS, SIZE, assets } from "../constants";
import Register from "./Register";

const Login = () => {
  const navigation = useNavigation();

  // useState is a hook that allows you to use state in function components
  // [<getter>, <setter>] = useState(<initialValue>).
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*useEffect is a hook that allows you to perform side effects in function components.
	It is called after the component renders, use can use [] as secound argument to call it once*/
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Register");
      }
    });
    // if you leave the screen, unsubscribe from the listener
    return unsub;
  }, []);

  const handlesignup = () => {
    console.log("signing up");
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userdata) => {
        const user = userdata.user;
        console.log(user);
      })
      .catch((error) => alert(error.message));
  };

  const handlesignin = () => {
    auth.signInWithEmailAndPassword(email, password).then((userdata) => {
      const user = userdata.user;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.logo}>
          <Image source={assets.logo_500} resizeMode="contain" style={{ width: 216, height: 194 }} />
        </View>
        <View style={styles.title}>
          <Text
            style={{
              color: "#303851",
              fontFamily: FONTS.Ubuntu_Bold,
              fontSize: 25,
            }}
          >
            Welcome To TryGo
          </Text>
          <Text
            style={{
              fontFamily: FONTS.Ubuntu_M,
              color: "#86888B",
              fontSize: 15,
              marginTop: 10,
            }}
          >
            Find you dream NFT art
          </Text>
        </View>
        <View style={styles.SignIn}>
          <TextInput
            placeholder="Email"
            value={email}
            style={{ paddingLeft: 12, color: "#000" }}
            placeholderTextColor="#5C5B5B"
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.SignUp}>
          <TextInput
            placeholder="Password"
            value={password}
            style={{ paddingLeft: 12, color: "#000" }}
            placeholderTextColor="#5C5B5B"
            onChangeText={setPassword}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.login} onPress={handlesignin}>
            <Text style={{ color: "#fff", fontFamily: FONTS.Ubuntu_Bold, fontSize: 19 }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 12,
            }}
          >
            <Text style={{ fontFamily: FONTS.Ubuntu, fontSize: 14, color: "#001D3D" }}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{ alignItems: "center", justifyContent: "center", position: "absolute" }}>
            <Text>hellllloloo</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
          flexDirection: "row",
          width: "100%",
          marginBottom: 20,
          flex: 1,
        }}
      >
        <Text style={{ fontFamily: FONTS.Ubuntu, fontSize: 14, color: "#001D3D" }}>Don’t have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={{ fontFamily: FONTS.Ubuntu_Bold, fontSize: 14, color: "#303851" }}> Register!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    position: "relative",
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingTop: "17%",
  },
  title: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
    // bottom: 65,
  },
  SignIn: {
    width: "90%",
    backgroundColor: "#F0ECF1",
    marginHorizontal: "5%",
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: "8%",
  },

  SignUp: {
    width: "90%",
    backgroundColor: "#F0ECF1",
    marginHorizontal: "5%",
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: "4%",
  },
  login: {
    width: "90%",
    backgroundColor: "#102931",
    marginHorizontal: "5%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 18,
    marginTop: "6%",
  },
});
