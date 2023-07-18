import { StyleSheet, View, Animated, useWindowDimensions } from "react-native";
import React from "react";
// import Color from "../../config/Color";

const Paginator = ({ data, scrollX, style }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flexDirection: "row", height: 64, ...style }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: 19, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 3,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: "#fff",
  },
});
