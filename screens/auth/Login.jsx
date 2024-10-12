import React, { useRef, useState } from "react";
import {
  View,
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";

const { width, height } = Dimensions.get("window");

export default function Login() {
  const navigation = useNavigation();
  const passwordInputRef = useRef(null);
  const [pressed, setPressed] = useState(false);

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
          <Text style={styles.welcomeText}>Welcome Back!</Text>
          <Text style={styles.descriptionText}>
            Yay! You're back! Thanks for shopping with us. We have exciting
            deals and promotions going on, grab your pick now!
          </Text>
          <Text style={styles.loginText}>LOG IN</Text>
          <View style={styles.line} />
        </View>
      </ImageBackground>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formContainer}>
          <Text style={styles.labelText}>Email address</Text>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name="envelope"
              size={20}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              placeholder="Enter your email"
              style={styles.input}
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
              placeholder="Enter your password"
              style={styles.input}
              secureTextEntry
              ref={passwordInputRef}
              returnKeyType="done"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: height * 0.02,
            }}
          >
            <Pressable
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => setPressed(!pressed)}
            >
              {pressed ? (
                <Fontisto name="checkbox-passive" size={15} color="black" />
              ) : (
                <AntDesign name="checksquareo" size={17} color="black" />
              )}
              <Text style={{ marginLeft: 10 }}>Remember me</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
              <Text style={{ fontWeight: "bold" }}>Forgot Password?</Text>
            </Pressable>
          </View>
          <Pressable
            style={{
              height: 48,
              width: "100%",
              backgroundColor: "#1E1E1E",
              borderRadius: 44,
              justifyContent: "center",
              alignItems: "center",
              marginTop: height * 0.06,
            }}
          >
            <Text
              style={{ color: "#fff", fontSize: 16, fontWeight: "regular" }}
            >
              Log in
            </Text>
          </Pressable>
          <Pressable
            style={{ alignItems: "center", marginTop: height * 0.02 }}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text>Not registered yet? Create an Account</Text>
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
    width: "80%",
    fontSize: width * 0.035,
  },
  loginText: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    marginTop: height * 0.04,
  },
  line: {
    height: 5,
    width: width * 0.2,
    backgroundColor: "black",
    marginTop: -3,
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
});
