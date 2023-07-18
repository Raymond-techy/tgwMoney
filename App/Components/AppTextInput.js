import { StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

import FontSize from "../Constants/FontSize";
import Colors from "../Config/Colors";
import Fonts from "../Constants/Fonts";

const AppTextInput = ({ ...otherProps }) => {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
      style={[
        {
          fontFamily: Fonts.REGULAR,
          fontSize: FontSize.small,
          padding: 10 * 2,
          backgroundColor: Colors.WHITE,
          borderRadius: 10,
          marginVertical: 10,
        },
        focused && {
          borderWidth: 3,
          borderColor: Colors.DARK_FIVE,
          shadowOffset: { width: 4, height: 10 },
          shadowColor: Colors.WHITE,
          shadowOpacity: 0.2,
          shadowRadius: 10,
        },
      ]}
      {...otherProps}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({});
