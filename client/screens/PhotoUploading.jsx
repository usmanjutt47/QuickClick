import { View, Text, Image, Pressable, Dimensions } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";

const { width, height } = Dimensions.get("window");
export default function PhotoUploading() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Image
        source={require("../assets/images/getStarted.png")}
        style={{ height: 400, width: "100%" }}
      />
      <View
        style={{
          position: "absolute",
          top: 0,
          width: "90%",
          alignSelf: "center",
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#f7f7f7",
            height: height * 0.06,
            width: height * 0.06,
            borderRadius: (height * 0.06) / 2,
            marginTop: height * 0.05,
            justifyContent: "center",
            alignItems: "center",

          }}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: height * 0.1,
          }}
        >
          Upload Profile Picture
        </Text>
        <Pressable
          style={{
            height: 200,
            width: 200,
            borderWidth: 12,
            maxHeight: 200,
            maxWidth: 200,
            borderRadius: 99,
            alignSelf: "center",
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={require("../assets/images/profile.png")}
            style={{ height: 160, width: 160 }}
          />

          <Pressable
            style={{
              height: 47,
              width: 47,
              position: "absolute",
              backgroundColor: "#fff",
              maxHeight: 47,
              maxWidth: 47,
              borderRadius: 99,
              bottom: 0,
              right: 0,
              justifyContent: "center",
              alignItems: "center",
              elevation: 3,
            }}
          >
            <Feather name="camera" size={24} color="black" />
          </Pressable>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{
            width: "100%",
            height: 48,
            backgroundColor: "#1E1E1E",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 44,
            marginTop: height * 0.1,
          }}
        >
          <Text style={{ color: "#fff" }}>Next</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{
            width: "100%",
            height: 48,
            backgroundColor: "#F7F7F9",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 44,
            marginTop: height * 0.02,
          }}
        >
          <Text style={{ color: "#000" }}>Skip</Text>
        </Pressable>
      </View>
    </View>
  );
}
