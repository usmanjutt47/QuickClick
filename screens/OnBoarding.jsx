import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { BlurView } from "expo-blur";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const responsiveWidth = (size) => (size * height) / 812;
const responsiveHeight = (size) => (size * width) / 375;

export default function OnBoarding() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/onboarding.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <BlurView style={styles.blurContainer} intensity={10} tint="default">
            <Text style={styles.text}>Welcome</Text>
            <Text style={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </BlurView>
          <Pressable style={styles.circle} />
          <Pressable
            style={styles.arrowButton}
            onPress={() => navigation.navigate("GetStarted")}
          >
            <Feather name="arrow-right" size={30} color="#fff" />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  blurContainer: {
    width: responsiveWidth(350),
    height: responsiveHeight(247),
    marginBottom: responsiveHeight(100),
    borderRadius: 33,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    overflow: "hidden",
    elevation: 0,
  },
  text: {
    fontSize: 29,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: responsiveHeight(30),
  },
  description: {
    width: "80%",
    textAlign: "center",
    alignSelf: "center",
    marginTop: responsiveHeight(25),
    color: "#FFFFFF",
  },
  circle: {
    backgroundColor: "transparent",
    height: 101,
    width: 101,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: responsiveHeight(58),
    borderWidth: 2,
    borderColor: "#a1937c",
  },
  arrowButton: {
    backgroundColor: "#10191E",
    height: 86,
    width: 86,
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: responsiveHeight(65),
  },
});
