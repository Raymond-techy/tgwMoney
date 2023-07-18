import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import { styled } from "styled-components";
import NumberPad from "../Components/NumberPad";
import Text from "../Components/Text";
import { StatusBar } from "expo-status-bar";
import Screen from "../Components/Screen";
const PinScreen = ({ navigation }) => {
  const [pinCount, setPinCount] = useState(0);
  const totalpins = 6;
  const pins = ["", "", "", "", "", ""];

  const pressKey = (_, index) => {
    setPinCount((prev) => {
      return index != 10 ? prev + 1 : prev - 1;
    });
  };

  return (
    <Screen>
      <Container>
        <Text center heavy title color="#964ff0">
          TWG MONEY
        </Text>
        <View style={{ marginVertical: 30 }}>
          <Text center heavy medium>
            Enter your PIN code.
          </Text>
        </View>
        <AccessPin>
          {pins.map((pin, index) => (
            <PinContainer key={index}>
              <Pin />
            </PinContainer>
          ))}
        </AccessPin>
        <Text center bold color="#9c9c9f">
          Forgot PIN?
        </Text>
        <UseTouch onPress={() => navigation.navigate("touch")}>
          <Fontisto
            name="locked"
            color="#964ff0"
            size={16}
            style={{ marginHorizontal: 10 }}
          />
          <Text bold color="#964ff0">
            Use Touch ID
          </Text>
        </UseTouch>
        <View>
          <MaterialIcons
            onPress={() => navigation.navigate("Tabs")}
            name="done"
            size={24}
            style={{ zIndex: 500, position: "absolute", bottom: 20, right: 60 }}
            color={"#fff"}
          />
          <NumberPad onPress={pressKey} />
        </View>
      </Container>
    </Screen>
  );
};

export default PinScreen;

const Container = styled.View`
  flex: 1;
  background-color: #1e1e1e;
  padding: 64px 16px;
`;

const AccessPin = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 32px 64px 16px 64px;
`;

const UseTouch = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 32px 0 64px 0;
`;

const PinContainer = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #5196f4;
  align-items: center;
  justify-content: center;
`;
const Pin = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #5196f4;
`;
