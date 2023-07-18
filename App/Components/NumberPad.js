import React from "react";

import { MaterialIcons } from "@expo/vector-icons";

import Text from "./Text";
import { styled } from "styled-components/native";

const NumberPad = ({ onPress, handleDone }) => {
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    <MaterialIcons name="keyboard-backspace" size={24} />,
    "0",
    "",
  ];

  return (
    <KeyPad>
      {buttons.map((item, index) => {
        return (
          <Number key={index} onPress={() => onPress(item, index)}>
            <Text large heavy>
              {item}
            </Text>
          </Number>
        );
      })}
    </KeyPad>
  );
};

export default NumberPad;

const Number = styled.TouchableOpacity`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  margin: 5px 10px;
  border-width: 1px;
  border-color: #ffffff20;
`;

const KeyPad = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  margin: 0 30px;
`;
