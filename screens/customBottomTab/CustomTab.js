import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation, useNavigationState } from "@react-navigation/native";

export default function CustomTab() {
  const navigation = useNavigation();

  const activeScreen = useNavigationState(
    (state) => state.routes[state.index].name
  );

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.tabContainer}>
          <Pressable
            style={styles.tab}
            onPress={() => handleNavigation("Home")}
          >
            <Image
              source={
                activeScreen === "Home"
                  ? require("../../assets/images/homefill.png")
                  : require("../../assets/images/home.png")
              }
              style={styles.icon}
            />
            <Text
              style={activeScreen === "Home" ? styles.activeText : styles.text}
            >
              Home
            </Text>
          </Pressable>
          <Pressable
            style={styles.tab}
            onPress={() => handleNavigation("Orders")}
          >
            <Image
              source={
                activeScreen === "Orders"
                  ? require("../../assets/images/fillOrder.png")
                  : require("../../assets/images/order.png")
              }
              style={styles.icon}
            />
            <Text
              style={
                activeScreen === "Orders" ? styles.activeText : styles.text
              }
            >
              Orders
            </Text>
          </Pressable>
          <Pressable
            style={styles.cartButton}
            onPress={() => handleNavigation("Cart")}
          >
            <Image
              source={
                activeScreen === "Cart"
                  ? require("../../assets/images/fillCart.png")
                  : require("../../assets/images/cart.png")
              }
              style={styles.icon}
            />
          </Pressable>
          <Pressable
            style={styles.tab}
            onPress={() => handleNavigation("Favorite")}
          >
            <Image
              source={
                activeScreen === "Favorite"
                  ? require("../../assets/images/heartFill.png")
                  : require("../../assets/images/heart.png")
              }
              style={styles.icon}
            />
            <Text
              style={
                activeScreen === "Favorite" ? styles.activeText : styles.text
              }
            >
              Favorites
            </Text>
          </Pressable>
          <Pressable
            style={styles.tab}
            onPress={() => handleNavigation("Profile")}
          >
            <Image
              source={
                activeScreen === "Profile"
                  ? require("../../assets/images/filluser.png")
                  : require("../../assets/images/user.png")
              }
              style={styles.icon}
            />
            <Text
              style={
                activeScreen === "Profile" ? styles.activeText : styles.text
              }
            >
              Profile
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  innerContainer: {
    width: "100%",
    height: 63,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderColor: "#ccc",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 30,
  },
  tab: {
    alignItems: "center",
  },
  icon: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
  text: {
    color: "black",
  },
  activeText: {
    color: "black",
    fontWeight: "bold",
  },
  cartButton: {
    alignItems: "center",
    marginTop: -40,
    backgroundColor: "#fff",
    elevation: 3,
    height: 65,
    width: 65,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
