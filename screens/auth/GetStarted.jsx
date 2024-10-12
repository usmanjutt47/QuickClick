import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const responsiveFontSize = (size) => (size * width) / 375;
const responsivePadding = (size) => (size * width) / 375;
const responsiveWidth = (size) => (size * height) / 812;
const responsiveHeight = (size) => (size * width) / 375;

export default function GetStarted() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../assets/images/getStarted.png")}
        style={style.imageBackground}
      >
        <View style={style.container}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={style.logo}
          />
          <Text style={style.mainText}>Buy & Sale Product</Text>
          <Text style={style.descText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <View style={style.mainContainer}>
            <Pressable style={style.pressableContainer}>
              <FontAwesome5 name="facebook" size={30} color="#1877F2" />
            </Pressable>

            <Pressable style={style.pressableContainer}>
              <Image
                source={require("../../assets/images/google.png")}
                style={{ resizeMode: "contain", height: 30, width: 30 }}
              />
            </Pressable>
            <Pressable style={style.pressableContainer}>
              <FontAwesome5 name="apple" size={30} color="black" />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "67%",
              marginTop: responsiveHeight(30),
            }}
          >
            <View
              style={{
                height: 2,
                width: "50%",
                backgroundColor: "#c5c3c4",
                alignSelf: "center",
              }}
            ></View>
            <Text style={{ marginHorizontal: 20 }}>OR</Text>
            <View
              style={{
                height: 2,
                width: "50%",
                backgroundColor: "#c5c3c4",
                alignSelf: "center",
              }}
            ></View>
          </View>

          <Pressable
            style={{
              height: 48,
              width: "80%",
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 44,
              marginTop: responsiveHeight(30),
            }}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text
              style={{ color: "#fff", fontSize: 18, fontWeight: "regular" }}
            >
              Sign up
            </Text>
          </Pressable>
          <Pressable
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text>Existing account? Log in</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
  pressableContainer: {
    borderWidth: 1,
    height: 48,
    width: 48,
    borderRadius: 99,
    maxWidth: 48,
    maxHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#A8B0AF",
  },
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    height: responsiveHeight(84),
    width: responsiveWidth(128),
    marginTop: responsiveHeight(200),
    resizeMode: "contain",
    alignSelf: "center",
  },
  mainText: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: responsiveHeight(30),
  },
  descText: {
    width: "79%",
    textAlign: "center",
    fontWeight: "medium",
    marginTop: responsiveHeight(5),
  },
  mainContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: responsiveHeight(40),
  },
});
