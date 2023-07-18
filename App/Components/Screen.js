import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";

import { StatusBar } from "expo-status-bar";
import Colors from "../Config/Colors";

const Screen = ({ barColor, style, children }) => {
  return (
    <SafeAreaView style={{ ...styles.container, style }}>
      <StatusBar style="inverted" backgroundColor={"#1e1e1e"} />
      {children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
