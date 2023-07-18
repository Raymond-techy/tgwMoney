import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import Colors from "../Config/Colors";
import Fonts from "../Constants/Fonts";
import { Ionicons } from "@expo/vector-icons";
import AppTextInput from "../Components/AppTextInput";
import FontSize from "../Constants/FontSize";
const RegisterScreen = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#1e1e1e",
          padding: 10 * 2,
        }}>
        <View
          style={{
            alignItems: "center",
          }}>
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.WHITE,
              fontFamily: Fonts.BOLD,
              marginVertical: 10 * 3,
            }}>
            Create account
          </Text>
          <Text
            style={{
              color: Colors.DEFAULT_WHITE,
              fontFamily: Fonts.REGULAR,
              fontSize: FontSize.small,
              maxWidth: "80%",
              textAlign: "center",
            }}>
            Create an account so you can explore better exchange rates
          </Text>
        </View>
        <View
          style={{
            marginVertical: 10 * 3,
          }}>
          <AppTextInput placeholder="Email" />
          <AppTextInput placeholder="Password" />
          <AppTextInput placeholder="Confirm Password" />
        </View>

        <TouchableOpacity
          onPress={() => navigate("touch")}
          style={{
            padding: 10 * 2,
            backgroundColor: Colors.WHITE,
            marginVertical: 10 * 3,
            borderRadius: 10,
            shadowColor: Colors.BLACK,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }}>
          <Text
            style={{
              fontFamily: Fonts.BOLD,
              color: Colors.DARK_ONE,
              textAlign: "center",
              fontSize: FontSize.large,
            }}>
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("touch")}
          style={{
            padding: 10,
          }}>
          <Text
            style={{
              fontFamily: Fonts.BOLD,
              color: Colors.WHITE,
              textAlign: "center",
              fontSize: FontSize.small,
            }}>
            Already have an account
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: 10 * 3,
          }}>
          <Text
            style={{
              fontFamily: Fonts.SEMI_BOLD,
              color: Colors.WHITE,
              textAlign: "center",
              fontSize: FontSize.small,
            }}>
            Or continue with
          </Text>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <TouchableOpacity
              style={{
                padding: 10,
                // backgroundColor: Colors.WHITE,
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}>
              <Ionicons name="logo-google" color={Colors.WHITE} size={10 * 2} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: Colors.gray,
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}>
              <Ionicons name="logo-apple" color={Colors.WHITE} size={10 * 2} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: Colors.gray,
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}>
              <Ionicons
                name="logo-facebook"
                color={Colors.WHITE}
                size={10 * 2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
