import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../assets/styles/Global";

export default function ReviewDetails({navigation}) {
  const pressHandler = () => {
    navigation.goBack();
  } 

  return (
    <View style={globalStyles.container}>
      <Text>Review Details screen</Text>
      <Button title="Back to home" onPress={pressHandler}></Button>
    </View>
  );
}