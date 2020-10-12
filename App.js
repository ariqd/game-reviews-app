import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { AppNavigator } from "./routes/AppNavigator";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }

  return <AppNavigator />;
}
