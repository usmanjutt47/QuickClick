import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
  Easing,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomTab from "./customBottomTab/CustomTab";
import { useFocusEffect } from "@react-navigation/native";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(0);
  const slideAnim = useRef(new Animated.Value(100)).current;
  const [images, setImages] = useState([
    require("../assets/images/heart.png"),
    require("../assets/images/heart.png"),
  ]);

  const toggleImage = (index) => {
    const newImages = [...images];
    newImages[index] =
      newImages[index] === require("../assets/images/heart.png")
        ? require("../assets/images/fillHeart.png")
        : require("../assets/images/heart.png");
    setImages(newImages);
  };

  useFocusEffect(
    React.useCallback(() => {
      slideAnim.setValue(100);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
      return () => {
        slideAnim.stopAnimation();
      };
    }, [slideAnim])
  );

  const DATA = [
    { id: "0", label: "All Items", icon: "th-large" },
    { id: "1", label: "New Items" },
    { id: "2", label: "Old Items" },
    { id: "3", label: "Top Product" },
  ];

  const CATEGORIES = [
    {
      id: "1",
      name: "Fashion",
      image: require("../assets/images/dress.png"),
      bgColor: "#ECFDF5",
    },
    {
      id: "2",
      name: "Electronics",
      image: require("../assets/images/pc.png"),
      bgColor: "#FFF7ED",
    },
    {
      id: "3",
      name: "Appliances",
      image: require("../assets/images/fridge.png"),
      bgColor: "#ECFDF5",
    },
    {
      id: "4",
      name: "Beauty",
      image: require("../assets/images/beauty.png"),
      bgColor: "#ECFEFF",
    },
    {
      id: "5",
      name: "Furniture",
      image: require("../assets/images/sofa.png"),
      bgColor: "#EFF6FF",
    },
  ];

  const renderItem = ({ item, index }) => {
    const isSelected = selectedItem === index;
    const isAllItems = item.id === "0";

    return (
      <Pressable
        style={[
          styles.itemContainer,
          isSelected ? styles.selectedItem : styles.unselectedItem,
        ]}
        onPress={() => setSelectedItem(index)}
      >
        {isAllItems && (
          <FontAwesome5
            name={item.icon}
            size={20}
            color={isSelected ? "#fff" : "#000"}
            style={styles.icon}
          />
        )}
        <Text style={[styles.itemText, isSelected && styles.selectedText]}>
          {item.label}
        </Text>
      </Pressable>
    );
  };

  const renderCategoryItem = ({ item }) => {
    return (
      <View style={{ alignItems: "center", marginRight: 10 }}>
        <Pressable
          style={{
            height: 65,
            width: 65,
            backgroundColor: item.bgColor,
            borderRadius: 99,
            justifyContent: "center",
            alignItems: "center",
            elevation: 1,
            marginLeft: 1,
          }}
        >
          <Image
            source={item.image}
            style={{ height: 40, width: 40, resizeMode: "contain" }}
          />
        </Pressable>
        <Text style={{ fontSize: 12, fontWeight: "regular", marginTop: 10 }}>
          {item.name}
        </Text>
      </View>
    );
  };

  const imageSliderData = [
    {
      id: "1",
      image: require("../assets/images/headphone.png"),
      color: "#10191E",
      heading: "High quality Of",
      heading2: "TMA-2 Headphone",
      sale: "70% off",
      shopNow: "Shop now",
    },
    {
      id: "2",
      image: require("../assets/images/headphone.png"),
      color: "#10191E",
      heading: "High quality Of",
      heading2: "TMA-2 Headphone",
      sale: "70% off",
      shopNow: "Shop now",
    },
    {
      id: "3",
      image: require("../assets/images/headphone.png"),
      color: "#10191E",
      heading: "High quality Of",
      heading2: "TMA-2 Headphone",
      sale: "70% off",
      shopNow: "Shop now",
    },
  ];

  const imageSliderItem = ({ item }) => {
    return (
      <Pressable
        style={{
          height: 140,
          width: 343,
          borderRadius: 18,
          backgroundColor: item.color,
          marginRight: 10,
          flexDirection: "row",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "90%",
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 12,
                color: "#fff",
                fontWeight: "bold",
                width: "35%",
              }}
            >
              {item.heading}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#fff",
                fontWeight: "bold",
                width: "35%",
                marginTop: 3,
              }}
            >
              {item.heading2}
            </Text>
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                width: "45%",
                marginTop: 10,
                fontSize: 25,
              }}
            >
              {item.sale}
            </Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  color: "#F8F9FA",
                  fontWeight: "400",
                  width: "70%",
                }}
              >
                {item.shopNow}
              </Text>
              <AntDesign
                name="arrowright"
                size={24}
                color="#fff"
                style={{ marginLeft: -150, marginTop: 4 }}
              />
            </Pressable>
          </View>
        </View>
        <Image
          source={item.image}
          style={{
            height: 100,
            width: 100,
            marginLeft: -100,
            resizeMode: "contain",
            marginTop: 10,
          }}
        />
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f9fa" }}>
      <View style={{ width: "90%", height: "100%", alignSelf: "center" }}>
        <View style={styles.header}>
          <Pressable>
            <Image
              source={require("../assets/images/drawer.png")}
              style={{ resizeMode: "contain", width: 35, height: 35 }}
            />
          </Pressable>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
          <Pressable>
            <Image
              source={require("../assets/images/profile.png")}
              style={styles.headerIcon}
            />
          </Pressable>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.greetingText}>Hi, Hammad Habib</Text>
          <Text style={styles.titleText}>What are you looking for today?</Text>

          <View style={styles.inputContainer}>
            <FontAwesome5
              name="search"
              size={20}
              color="#BABABA"
              style={styles.icon}
            />
            <TextInput
              placeholder="Search Product"
              style={styles.input}
              placeholderTextColor="#BABABA"
            />
          </View>

          <View>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 30 }}>
            Categories
          </Text>

          <View>
            <FlatList
              data={CATEGORIES}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryContainer}
            />
          </View>
          <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 30 }}>
            Trending Products
          </Text>
          <View>
            <FlatList
              data={imageSliderData}
              renderItem={imageSliderItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              snapToAlignment="center"
              snapToInterval={350}
              decelerationRate="fast"
              style={{ marginTop: 10 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Featured Products
            </Text>
            <Pressable>
              <Text
                style={{
                  fontSize: 12,
                  textDecorationLine: "underline",
                  color: "#6B7280",
                }}
              >
                View All
              </Text>
            </Pressable>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                marginBottom: 100,
                marginTop: 20,
              }}
            >
              <Pressable
                style={{
                  height: 280,
                  backgroundColor: "#fff",
                  width: "49%",
                  borderRadius: 12,
                }}
              >
                <Image
                  source={require("../assets/images/t-shirt.jpeg")}
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    height: "60%",
                    borderRadius: 12,
                  }}
                />
                <Pressable
                  onPress={() => toggleImage(0)}
                  style={{ position: "absolute", top: 10, right: 10 }}
                >
                  <Image
                    source={images[0]}
                    style={{
                      resizeMode: "contain",
                      width: 20,
                      height: 20,
                    }}
                  />
                </Pressable>

                <Pressable style={{ width: "90%", alignSelf: "center" }}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{
                      fontSize: 13,
                      fontWeight: "bold",
                      marginTop: 10,
                      width: "75%",
                    }}
                  >
                    Online Sale T Shirts Design For Mens In Pakistan
                  </Text>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{ fontSize: 12, fontWeight: "regular" }}
                  >
                    Autumn And Winter Casual cotton-padded jacket Online Sale T
                    Shirts Design For Mens In Pakistan
                  </Text>
                  <Text style={{ fontSize: 15, fontWeight: "900" }}>
                    Rs 499
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    width: "90%",
                    flexDirection: "row",
                    marginTop: -10,
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/images/rating.png")}
                    style={{ height: 50, width: 110, resizeMode: "contain" }}
                  />
                  <Text style={{ color: "#A4A9B3" }}> 1,307</Text>
                </Pressable>
              </Pressable>

              <Pressable
                style={{
                  height: 280,
                  backgroundColor: "#fff",
                  width: "49%",
                  borderRadius: 12,
                }}
              >
                <Image
                  source={require("../assets/images/t-sirt-2.jpg")}
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    height: "60%",
                    borderRadius: 12,
                  }}
                />
                <Pressable
                  onPress={() => toggleImage(1)}
                  style={{ position: "absolute", top: 10, right: 10 }}
                >
                  <Image
                    source={images[1]}
                    style={{
                      resizeMode: "contain",
                      width: 20,
                      height: 20,
                    }}
                  />
                </Pressable>

                <Pressable style={{ width: "90%", alignSelf: "center" }}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{
                      fontSize: 13,
                      fontWeight: "bold",
                      marginTop: 10,
                      width: "75%",
                    }}
                  >
                    Online Sale T Shirts Design For Mens In Pakistan
                  </Text>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{ fontSize: 12, fontWeight: "regular" }}
                  >
                    Autumn And Winter Casual cotton-padded jacket Online Sale T
                    Shirts Design For Mens In Pakistan
                  </Text>
                  <Text style={{ fontSize: 15, fontWeight: "900" }}>
                    Rs 3,399
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    width: "90%",
                    flexDirection: "row",
                    marginTop: -10,
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/images/rating.png")}
                    style={{ height: 50, width: 110, resizeMode: "contain" }}
                  />
                  <Text style={{ color: "#A4A9B3" }}> 6,890</Text>
                </Pressable>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
      <Animated.View
        style={[
          styles.tabContainer,
          { transform: [{ translateY: slideAnim }] },
        ]}
      >
        <CustomTab />
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -10,
  },
  headerIcon: {
    resizeMode: "contain",
    width: 40,
    height: 40,
  },
  logo: {
    resizeMode: "contain",
    width: 90,
    height: 90,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "regular",
  },
  titleText: {
    fontSize: 27,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#BABABA",
    borderRadius: 12,
    marginTop: 30,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    color: "#000",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginHorizontal: 3,
    borderRadius: 8,
    height: 45,
    marginTop: 20,
    width: "auto",
  },
  selectedItem: {
    backgroundColor: "#000",
  },
  unselectedItem: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  itemText: {
    fontSize: 13,
    color: "#1B2028",
    fontWeight: "bold",
  },
  selectedText: {
    color: "#FFFFFF",
  },
  categoryContainer: {
    marginTop: 10,
  },
  tabContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    elevation: 5,
  },
});
