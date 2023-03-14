import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
// import Colors from "../Constants/Colors";
import { Dimensions } from "react-native";
const width = Dimensions.get("screen").width / 1 - 50;
import { useEffect, useState } from "react";
import { Button } from "react-native-paper";
// import { useNavigation } from "@react-navigation/native";

const MyCartScreen = () => {

	return (
		<View>
			
		</View>
	)
};

export default MyCartScreen;

const styles = StyleSheet.create({
  compagnyContainer: {
    backgroundColor: "#EEF1FF",
  },
  //   categoryText: {
  //     color: "#",
  //     paddingHorizontal: 20,
  //     marginRight: 10,
  //     fontSize: 20,
  //     fontWeight: "bold",
  //   },
  Card: {
    height: 200,
    width,
    backgroundColor: "#E3DFFD",
    marginHorizontal: 2,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 25,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  compagnyInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
});
