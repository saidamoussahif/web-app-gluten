import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Colors from "../Constants/Colors";
import FontSize from "../Constants/FontSize";
import Fonts from "../Constants/Fonts";
import axios from "axios";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

function RegisterScreen(props) {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigation = useNavigation();

  //  fetch api register

  const signup = () => {
    axios({
      method: "post",
      url: " http://192.168.9.33:9090/api/users/register",
      data: {
        fullname: fullname,
        phone: phone,
        email: email,
        password: password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (Response.data.token)
          AsyncStorage.setItem("token", Response.data.token);
        Alert.alert("Register Successful");
        props.navigation.navigate("Login");
      })
      .catch((err) => {
        console.log(err);
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
            Create account
          </Text>
          <Text
            style={{
              color: Colors.darkGreen,
              fontSize: FontSize.large,
              fontWeight: "semiBold",
              maxWidth: "100%",
              textAlign: "center",
              fontFamily: Fonts.bold,
              marginTop: 30,
            }}
          >
            Create an account so you can explore all the existing Products
          </Text>
        </View>
        <View
          style={{
            marginTop: 40,
          }}
        >
          <TextInput
            placeholder="Full name"
            value={fullname}
            onChangeText={() => setFullname()}
            placeholderTextColor={Colors.dark}
            style={{
              backgroundColor: Colors.lightGray,
              fontFamily: Fonts.regular,
              fontSize: FontSize.small,
              padding: 10,
              borderRadius: 10,
              marginVertical: 10,
            }}
          />
          <TextInput
            placeholder="Phone number"
            keyboardType="numeric"
            onChangeText={() =>setPhone()}
            placeholderTextColor={Colors.dark}
            style={{
              backgroundColor: Colors.lightGray,
              fontFamily: Fonts.regular,
              fontSize: FontSize.small,
              padding: 10,
              borderRadius: 10,
              marginVertical: 10,
            }}
          />
          <TextInput
            placeholder="Email"
            onChangeText={() => setEmail()}
            value={email}
            placeholderTextColor={Colors.dark}
            style={{
              backgroundColor: Colors.lightGray,
              fontFamily: Fonts.regular,
              fontSize: FontSize.small,
              padding: 10,
              borderRadius: 10,
              marginVertical: 10,
            }}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
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
          />
        </View>
        <TouchableOpacity Press={() => props.navigation.navigate("Login")}>
          <Text
            style={{
              fontFamily: Fonts.regular,
              color: Colors.darkGreen,
              fontSize: FontSize.small,
              alignSelf: "flex-end",
            }}
          >
            Already have an account!
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
          <Text
            Press={() => props.navigation.navigate("Profile")}
            style={{
              fontFamily: Fonts.bold,
              color: Colors.white,
              backgroundColor: Colors.green,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

export default RegisterScreen;
