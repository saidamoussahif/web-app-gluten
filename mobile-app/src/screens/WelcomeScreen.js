import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Colors from "../Constants/Colors";
import Button from "../Components/Button";
import FontSize from "../Constants/FontSize";
import Fonts from "../Constants/Fonts";
// import { useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

export default WelcomeScreen = (props) => {
  // const navigation = useNavigation();
  // useEffect(() => {
  //   AsyncStorage.getItem("token").then((token) => {
  //     if (!token) {
  //       navigation.navigate("Login");
  //     }
  //   });
  // }, []);

  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={require("../../assets/undraw_shopping_app_flsj.png")}
          style={{ height: height / 2.5 }}
          resizeMode={"contain"}
        />
        <View
          style={{
            paddingHorizontal: 40,
            paddingTop: 40,
          }}
        >
          <Text
            style={{
              color: Colors.green,
              fontSize: FontSize.xxLarge,
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: Fonts.bold,
            }}
          >
            Discover Your Favorite Free Gluten Products
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 40,
            paddingTop: 20,
          }}
        >
          <Text
            style={{
              color: Colors.black,
              fontSize: 15,
              textAlign: "center",
            }}
          >
            Discover Your Favorite Free Gluten Products
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: Colors.green,
            marginvertical: 15,
            marginHorizontal: 40,
            width: "60%",
            height: 40,
            marginTop: 40,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            shadowColor: Colors.green,
            zIndex: 100,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.3,
            shadowRadius: 13.16,
            elevation: 20,
          }}
        >
          <Button
            btnLabel="Get Started"
            textColor={Colors.light}
            Press={() => props.navigation.navigate("Login")}
            style={{
              fontSize: FontSize.medium,
              textAlign: "center",
              paddingVertical: 4,
            }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
