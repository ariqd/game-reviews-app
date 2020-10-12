import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../assets/styles/Global";

export default function ReviewDetails({ route, navigation }) {
  const { title } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
    </View>
  );
}
