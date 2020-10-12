import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import ReviewDetails from "../screens/ReviewDetails";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#eee" },
      headerTintColor: '#444'
    }}
  >
    <Screen
      name="Home"
      component={Home}
      options={{
        title: "GameZone",
      }}
    />
    {/* <Screen name="About" component={About} /> */}
    <Screen
      name="Details"
      component={ReviewDetails}
      options={{
        title: "Review Details",
      }}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
