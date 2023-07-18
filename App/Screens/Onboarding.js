import {
  StyleSheet,
  Text,
  View,
  Animated,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useRef } from "react";

import { EvilIcons } from "@expo/vector-icons";
import Slides from "./Onboarding/Slides";
import Paginator from "./Onboarding/Paginator";
import Item from "./Onboarding/Item";
import AppButton from "../Components/AppButton";
import Colors from "../Config/Colors";
// import Routes from "../Navigation/Routes";

const { width } = Dimensions.get("window");

const Onboarding = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  // console.log(width);

  const scrollTO = async () => {
    if (currentIndex < Slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      try {
        // await AsyncStorage.setItem("@viewOnboarding", "true");
      } catch (error) {
        console.log("first");
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={Slides}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          initialNumToRender={1}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          contentContainerStyle={{ gap: 1 }}
          onViewableItemsChanged={viewableItemsChanged}
          scrollEventThrottle={32}
          viewabilityConfig={viewConfig}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View>
              <Paginator
                data={Slides}
                scrollX={scrollX}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 35,
                  zIndex: 400,
                  justifyContent: "center",
                }}
              />
              {index == "4" ? (
                <View
                  style={{
                    position: "absolute",
                    bottom: 50,
                    right: 35,
                    zIndex: 400,
                    justifyContent: "center",
                    alignSelf: "center",
                    width: width * 0.3,
                  }}>
                  <AppButton
                    title={"Get Started"}
                    color={Colors.PRIMARY}
                    handlePress={() => navigation.navigate("register")}
                  />
                </View>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.4}
                  onPress={scrollTO}
                  style={{
                    position: "absolute",
                    bottom: 50,
                    right: 35,
                    zIndex: 400,
                    borderColor: Colors.WHITE,
                    justifyContent: "center",
                    borderRadius: 100,
                    borderWidth: 1,
                  }}>
                  <EvilIcons color={"#fff"} name="chevron-right" size={50} />
                </TouchableOpacity>
              )}
              <Item
                item={item}
                imgStyle={{
                  ...item.position,
                  width: width < 400 ? width * 1.18 : width * 1.3,
                }}
              />
            </View>
          )}
          ref={slidesRef}
        />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6F0FC",
  },
  next: {
    padding: 10,
    backgroundColor: "#fff",
    width: 100,
    borderRadius: 102,
    alignItems: "center",
    justifyContent: "center",
  },
  skip: {
    fontWeight: "800",
    fontSize: 16,
    color: "red",
    backgroundColor: "yellow",
  },
});
