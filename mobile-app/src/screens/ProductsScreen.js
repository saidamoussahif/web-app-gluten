import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput } from "react-native";
import Colors from "../Constants/Colors";
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import Products from "../Components/Products";
import Categories from "../Components/Categories";
// import {AsyncStorage} from "rea"

function HomeScreen() {
  // const [token, setToken] = useState("");

// logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  useEffect(() => {
   
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
      }}
    >
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to</Text>
          <Text
            style={{ fontSize: 38, fontWeight: "bold", color: Colors.green }}
          >
            Free Gluten
          </Text>
        </View>
        <View
          style={{
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome name="sign-out" size={24} color={Colors.green}
          onPress={logout}
           />
        </View>
      </View>
      <View style={{ marginTop: 30, flexDirection: "row" }}>
        <View style={styles.searchContainer}>
          <AntDesign
            name="search1"
            size={20}
            style={{
              marginLeft: 20,
            }}
          />
          <TextInput
            placeholder="Search"
            style={{
              height: 40,
              backgroundColor: Colors.lightGray,
              borderRadius: 25,
              paddingHorizontal: 20,
            }}
          />
        </View>
        <View style={styles.sortBtn}>
          <MaterialIcons name="sort" size={24} color="white" />
        </View>
      </View>
      <Categories />
      <Products />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
    flex: 1,
  },
  sortBtn: {
    height: 50,
    width: 50,
    backgroundColor: Colors.green,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
});

export default HomeScreen;
