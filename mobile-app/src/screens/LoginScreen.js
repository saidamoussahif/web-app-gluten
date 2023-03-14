import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import  Button from "../Components/Button"
import Colors from "../Constants/Colors";
import FontSize from "../Constants/FontSize";
import Fonts from "../Constants/Fonts";
import axios from "axios";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";



function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post("http://192.168.9.33:9090/api/users/login", {
        email: email,
        password: password, 
      })
      .then((response) => {
        if (response.data.token) {
          AsyncStorage.setItem("token", response.data.token);
          Alert.alert("Login Successful");
          props.navigation.navigate("Products");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };




  return (
    <KeyboardAwareScrollView>
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}
    >
      <View
        style={{
          paddingHorizontal: 40,
          paddingTop: 40,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: Colors.green,
              fontSize: FontSize.xxLarge,
              fontWeight: "semiBold",
              textAlign: "center",
              fontFamily: Fonts.bold,
              marginVertical: 30,
            }}
          >
            Login here
          </Text>
          <Text
            style={{
              color: Colors.darkGreen,
              fontSize: FontSize.large,
              fontWeight: "semiBold",
              maxWidth: "60%",
              textAlign: "center",
              fontFamily: Fonts.bold,
              marginTop: 30,
            }}
          >
            Welcome Back you're been missed !
          </Text>
        </View>
        <View
          style={{
            marginTop: 40,
          }}
        >
          <TextInput
            placeholder="Email"
            placeholderTextColor={Colors.dark}
            style={{
              backgroundColor: Colors.lightGray,
              fontFamily: Fonts.regular,
              fontSize: FontSize.small,
              padding: 10,
              borderRadius: 10,
              marginVertical: 10,
            }}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
        
            placeholder="Password"
            placeholderTextColor={Colors.dark}
            secureTextEntry={true}
            style={{
              backgroundColor: Colors.lightGray,
              fontFamily: Fonts.regular,
              fontSize: FontSize.small,
              padding: 10,
              borderRadius: 10,
              marginVertical: 10,
            }}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <TouchableOpacity Press={() => navigation.navigate("Register")}>
          <Text
            style={{
              fontFamily: Fonts.regular,
              color: Colors.darkGreen,
              fontSize: FontSize.small,
              alignSelf: "flex-end",
            }}
          >
            Don't have an account?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.green,
            marginvertical: 15,
            marginHorizontal: 40,
            width: "60%",
            height: 40,
            marginTop: 60,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            shadowColor: Colors.green,
          }}
        >
          <Button
          btnLabel='Login'
          textColor={Colors.white}
            style={{
              fontFamily: Fonts.bold,
              color: Colors.white,
              backgroundColor: Colors.green,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
            Press={() =>
              login(email, password)
              //  props.navigation.navigate("Home")
              }
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 25,
    left: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
