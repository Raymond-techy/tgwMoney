import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import React from "react";
import Fonts from "../../Constants/Fonts";
import FontSize from "../../Constants/FontSize";

const { height, width } = Dimensions.get("screen");

const Item = ({ item, imgStyle }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.img} style={styles.image} resizeMode="contain" />
      <View
        style={{
          width,
          position: "absolute",
          bottom: 0,
          height: height * 0.35,
          backgroundColor: "#1e1e1e",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          elevation: 18,
          shadowColor: "blue",
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.26,
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.desc}</Text>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    width,
    height: height,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    backgroundColor: "#E6F0FC",
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.7,
  },
  title: {
    fontFamily: Fonts.BOLD,
    fontSize: FontSize.xLarge,
    marginBottom: 5,
    color: "#fff",
    textAlign: "left",
    paddingTop: 20,
    paddingHorizontal: 30,
    maxWidth: width * 0.8,
  },
  description: {
    fontSize: 16,
    lineHeight: 27,
    color: "#fff",
    textAlign: "left",
    paddingHorizontal: 30,
    fontFamily: Fonts.BOLD,
    maxWidth: width * 0.8,
  },
});
