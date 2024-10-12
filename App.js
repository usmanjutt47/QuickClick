import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import OnBoarding from "./screens/OnBoarding";
import GetStarted from "./screens/auth/GetStarted";
import SignUp from "./screens/auth/SignUp";
import Login from "./screens/auth/Login";
import ForgotPassword from "./screens/auth/ForgotPassword";
import Home from "./screens/Home";
import PhotoUploading from "./screens/PhotoUploading";
import CustomTab from "./screens/customBottomTab/CustomTab";
import Orders from "./screens/BottomTabScreens/Orders";
import Cart from "./screens/BottomTabScreens/Cart";
import Favorite from "./screens/BottomTabScreens/Favorite";
import Profile from "./screens/BottomTabScreens/Profile";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
        }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PhotoUploading" component={PhotoUploading} />

        {/* Btotom Tabs */}
        <Stack.Screen name="CustomTab" component={CustomTab} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
