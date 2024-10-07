import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import React, { useEffect, useRef } from "react";
import CustomTab from "../customBottomTab/CustomTab";

export default function Favorite() {
  const slideAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite</Text>
      <View style={styles.content}></View>
      <Animated.View
        style={[
          styles.tabContainer,
          { transform: [{ translateY: slideAnim }] },
        ]}
      >
        <CustomTab activeScreen="Favorite" />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
  },
  tabContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
