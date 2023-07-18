import Fonts from "./App/Config/Fonts";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TouchScreen from "./App/Screens/TouchScreen";
import { useFonts } from "expo-font";
import PinScreen from "./App/Screens/PinScreen";
import HomeScreen from "./App/Screens/HomeScreen";
import Cards from "./App/Screens/Cards";
import Onboarding from "./App/Screens/Onboarding";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import RegisterScreen from "./App/Screens/Register";

export default function App() {
  const [fontsLoaded] = useFonts(Fonts);
  const stack = createStackNavigator();
  const tab = createBottomTabNavigator();

  const BottomTabs = () => (
    <tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1e1e1e",
          borderTopColor: "#1e1e1e",
          paddingHorizontal: 32,
        },
      }}>
      <tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <tab.Screen
        name="Wallets"
        component={Cards}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="credit-card" color={color} size={size} />
          ),
        }}
      />
    </tab.Navigator>
  );

  return !fontsLoaded ? null : (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="onboarding" component={Onboarding} />
        <stack.Screen name="register" component={RegisterScreen} />
        <stack.Screen name="touch" component={TouchScreen} />
        <stack.Screen name="pin" component={PinScreen} />
        <stack.Screen name="Tabs" component={BottomTabs} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
