// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigation } from "@react-navigation/bottm-tabs";

// // import { Icon } from "@expo/vector-icons/Icon";
// import Dimensions from "react-native";

// // import screens

// import Home from "../screens/HomeScreen";
// import Profile from "../screens/ProfileScreen";
// import Login from "../screens/LoginScreen";
// import Register from "../screens/RegisterScreen";

// const fullScreenWidth = Dimensions.get("window").width;
// const Stack = createStackNavigator();

// function HomeStackScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.screen name="Home" component={Home} />
//     </Stack.Navigator>
//   );
// }

// function LoginStackScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.screen name="Login" component={Login} />
//     </Stack.Navigator>
//   );
// }
// function RegisterStackScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.screen name="Register" component={Register} />
//     </Stack.Navigator>
//   );
// }

// function ProfileStackScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.screen name="Profile" component={Profile} />
//     </Stack.Navigator>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function Navigation(props) {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size, padding }) => {
//             let iconName;
//             if (route.name === "Home") {
//               iconName = focused ? "home" : "home-outline";
//             } else if (route.name === "Login") {
//               iconName = focused ? "login" : "login-outline";
//             } else if (route.name === "Register") {
//               iconName = focused ? "register" : "register-outline";
//             } else if (route.name === "Profile") {
//               iconName = focused ? "profile" : "profile-outline";
//             }
//             return (
//               <Icon
//                 name={iconName}
//                 size={size}
//                 color={color}
//                 style={{ paddingBottom: padding }}
//               />
//             );
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: "#fff",
//           inactiveTintColor: "grey",
//           style: {
//             width: fullScreenWidth,
//           },
//           labelStyle: {
//             fontSize: 16,
//           },
//         }}
//       >
//         <Tab.Screen
//           name="Home"
//           component={HomeStackScreen}
//           // options={{
//           //   tabBarIcon: ({ color }) => (
//           //     <Icon name="home" color={color} size={26} />
//           //   ),
//           // }}
//         />
//         <Tab.Screen
//           name="Login"
//           component={LoginStackScreen}
//           // options={{
//           //   tabBarIcon: ({ color }) => (
//           //     <Icon name="login" color={color} size={26} />
//           //   ),
//           // }}
//         />
//         <Tab.Screen
//           name="Register"
//           component={RegisterStackScreen}
//           // options={{
//           //   tabBarIcon: ({ color }) => (
//           //     <Icon name="register" color={color} size={26} />
//           //   ),
//           // }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={ProfileStackScreen}
//           // options={{
//           //   tabBarIcon: ({ color }) => (
//           //     <Icon name="profile" color={color} size={26} />
//           //   ),
//           // }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
