import React, { useRef, useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const { width, height } = Dimensions.get("window");

export default function SignUp() {
  const navigation = useNavigation();
  const fullNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);
  const locationInputRef = useRef(null);

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const [locationErrorMsg, setLocationErrorMsg] = useState(null);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [locationText, setLocationText] = useState("Fetching location...");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLocationErrorMsg("Permission to access location was denied");
        return;
      }

      let location;
      try {
        location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location.coords);
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } catch (error) {
        setLocationErrorMsg("Error fetching location");
        return;
      }

      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=AIzaSyAYXakEP93cooZt8x9RcssF_IamfjM4w44`
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const address = data.results[0].formatted_address;
          setLocationText(address);
        } else {
          setLocationText("Address not found");
        }
      } catch (error) {
        setLocationText("Error fetching address");
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/login.png")}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.imageContent}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5 name="chevron-left" size={24} color="black" />
          </Pressable>
          <Text style={styles.welcomeText}>Welcome Quickclick!</Text>
          <Text style={styles.descriptionText}>
            Yay! You're back! Thanks for shopping with us. We have exciting
            deals and promotions going on, grab your pick now!
          </Text>
          <Text style={styles.loginText}>SIGN UP</Text>
          <View style={styles.line} />
        </View>
      </ImageBackground>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formContainer}>
          <Text style={styles.labelText}>Full Name</Text>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name="user"
              size={20}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="John Williams"
              style={styles.input}
              returnKeyType="next"
              onSubmitEditing={() => emailInputRef.current?.focus()}
              blurOnSubmit={false}
            />
          </View>

          <Text style={styles.labelText}>Email address</Text>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name="envelope"
              size={20}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="hello@gmail.com"
              style={styles.input}
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
              blurOnSubmit={false}
            />
          </View>

          <Text style={styles.labelText}>Password</Text>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name="lock"
              size={20}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="Enter Password"
              style={styles.input}
              secureTextEntry
              ref={passwordInputRef}
              returnKeyType="next"
              onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
              blurOnSubmit={false}
            />
          </View>

          <Text style={styles.labelText}>Confirm Password</Text>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name="lock"
              size={20}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="Enter Confirm Password"
              style={styles.input}
              secureTextEntry
              ref={confirmPasswordInputRef}
              returnKeyType="next"
              onSubmitEditing={() => locationInputRef.current?.focus()}
              blurOnSubmit={false}
            />
          </View>

          <Text style={styles.labelText}>Add Location</Text>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name="map-marker-alt"
              size={20}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="Your Location"
              style={styles.input}
              ref={locationInputRef}
              returnKeyType="done"
            />
          </View>

          <View style={styles.mapContainer}>
            <MapView style={styles.map} region={region}>
              {currentLocation && (
                <Marker
                  coordinate={currentLocation}
                  title="Current Location"
                  description={locationText}
                />
              )}
            </MapView>
          </View>

          <Pressable
            style={styles.signUpButton}
            onPress={() => navigation.navigate("PhotoUploading")}
          >
            <Text style={styles.signUpButtonText}>Sign up</Text>
          </Pressable>

          <Pressable
            style={styles.loginRedirect}
            onPress={() => navigation.navigate("Login")}
          >
            <Text>Already have an account? Login</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: "100%",
    height: height * 0.4,
  },
  imageContent: {
    height: "100%",
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
  },
  backButton: {
    backgroundColor: "#f7f7f7",
    height: height * 0.06,
    width: height * 0.06,
    borderRadius: (height * 0.06) / 2,
    marginTop: height * 0.05,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontWeight: "bold",
    marginTop: height * 0.05,
    fontSize: width * 0.06,
  },
  descriptionText: {
    marginTop: height * 0.02,
    width: "83%",
    fontSize: width * 0.035,
  },
  loginText: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    marginTop: height * 0.04,
  },
  line: {
    height: 5,
    width: 100,
    backgroundColor: "black",
  },
  formContainer: {
    padding: width * 0.05,
  },
  labelText: {
    fontWeight: "bold",
    marginTop: height * 0.03,
    fontSize: width * 0.04,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    height: height * 0.065,
    marginTop: height * 0.01,
    paddingLeft: width * 0.03,
  },
  icon: {
    marginRight: width * 0.03,
  },
  input: {
    flex: 1,
    height: "100%",
  },
  mapContainer: {
    width: "100%",
    height: 200,
    marginTop: height * 0.03,
    borderRadius: 20,
    overflow: "hidden",
  },
  map: {
    flex: 1,
    borderRadius: 30,
    overflow: "hidden",
  },
  signUpButton: {
    height: 48,
    width: "100%",
    backgroundColor: "#1E1E1E",
    borderRadius: 44,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.03,
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "regular",
  },
  loginRedirect: {
    alignItems: "center",
    marginTop: height * 0.02,
  },
});
