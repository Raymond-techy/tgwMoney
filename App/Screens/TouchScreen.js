import styled from "styled-components/native";
import { MaterialIcons, Fontisto } from "@expo/vector-icons";
import Text from "../Components/Text";
import { StatusBar } from "expo-status-bar";
import Screen from "../Components/Screen";
export default TouchScreen = ({ navigation }) => {
  return (
    <Screen>
      <Container>
        <Text center heavy title color="#964ff0" m={("50", "0")}>
          TWG MONEY
        </Text>
        <Touch>
          <Circle bgColor="#1e1e1e">
            <Circle bgColor="#5196f405">
              <Circle bgColor="#5196f410">
                <Circle bgColor="#5196f430">
                  <TouchButton>
                    <MaterialIcons
                      name="fingerprint"
                      size={64}
                      color="#ffffff"
                    />
                  </TouchButton>
                </Circle>
              </Circle>
            </Circle>
          </Circle>
        </Touch>
        <Text center bold color="#9c9c9f">
          Please very your identity using Touch ID
        </Text>
        <UseTouch onPress={() => navigation.navigate("pin")}>
          <Fontisto
            name="locked"
            color="#964ff0"
            size={16}
            style={{ marginHorizontal: 10 }}
          />
          <Text bold color="#964ff0">
            Use Pin
          </Text>
        </UseTouch>
      </Container>
    </Screen>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
  padding: 32px 0;
`;
const Touch = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Circle = styled.View`
  background-color: ${(props) => props.bgColor};
  padding: 10px;
  border-radius: 999px;
`;

const TouchButton = styled.TouchableOpacity`
  background-color: #5196f4;
  padding: 8px;
  border-radius: 100px;
`;

const UseTouch = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 32px 0 64px 0;
`;
