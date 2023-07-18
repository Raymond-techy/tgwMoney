import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "./../Config/Colors";
import FontSize from "../Constants/FontSize";
import Fonts from "../Constants/Fonts";
function AppButton({ title, handlePress, color, textStyle, btnStyle }) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{ ...styles.buttonContainer, backgroundColor: color, ...btnStyle }}
      onPress={handlePress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
  },
  text: {
    letterSpacing: 1,
    color: "#fff",
    fontSize: FontSize.medium,
    fontFamily: Fonts.LIGHT,
    fontWeight: "bold",
  },
});
export default AppButton;
