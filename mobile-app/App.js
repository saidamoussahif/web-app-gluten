import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginScreen from "./src/screens/LoginScreen";
import ProductsScreen from "./src/screens/ProductsScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const token = AsyncStorage.getItem("token");

  // useEffect(() => {
  //   AsyncStorage.getItem("token").then((token) => {
  //     if (!token) {
  //       navigation.navigate("Login");
  //     }
  //   });
  // }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Welcome"
        options={{
          headerShown: true,
        }}
        // <Ionicons name="ios-grid-outline" size={24} color="black" />
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Welcome") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Products") {
              iconName = focused ? "ios-grid-outline" : "ios-grid-outline";
            } else if (route.name === "Login") {
              iconName = focused ? "person-outline" : "person-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#A4BE7B",
          tabBarInactiveTintColor: "grey",
        })}
      >
        {token ? (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        ) : (
          <>
          <Stack.Screen name="CategoryProdcuct" component={CategoryProdcuctScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
