import { StyleSheet, Text, View, Image, Box, Button } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import Colors from "../Constants/Colors";
import { Dimensions } from "react-native";
const width = Dimensions.get("screen").width / 1 - 50;
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Alert } from "react-native";
import Btn from '../Components/Button'

const DisplayProducts = (props) => {
  const navigation = useNavigation();
  const [product, setProduct] = useState("");
  const [token, setToken] = useState("");

  const getProducts = async () => {
    const response = await fetch(
      "http://172.16.100.96:9090/api/products/getAll"
    );
    const data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProducts();
  });

  // add to cart
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      navigate("/login");
      Alert.alert("Please Login to add product to cart!");
    }else{
      const response = await fetch(
        "http://172.16.100.96:9090/api/products/addToCart"
      );
      const data = await response.json();
      setProduct(data);
    }
  };

  return (
    // <View style={styles.productContainer}>
    //   <FlatList
    //     data={product}
    //     renderItem={({ item }) => (
    //       <View style={styles.Card}>
    //         <View>
    //           <View>
    //           <Feather name="heart"
    //               size={25}
    //               color="black"
    //               style={{
    //                 position: "absolute",
    //                 top: 0,
    //                 right: 5,
    //                 padding: 4,
    //                 marginBottom: 10,
    //               }}
    //               onPress={() => navigation.navigate("wishList")}
    //             />
    //           <AntDesign name="pluscircle" size={30} color="#9DC08B"
    //           // onPress={
    //           //   () => navigation.navigate("MyCart")
    //           // }
    //           />
    //           </View>
    //           <Image
    //             style={{
    //               width: 200,
    //               height: 200,
    //               alignSelf: "center",
    //               borderRadius: 10,
    //               marginTop: 20,
    //             }}
    //               source={`http://172.16.100.96:9090/public/img/${item.image}`}
    //           />
    //         </View>
    //         <View style={styles.productInfo}>
    //           <Text>{item.productName}</Text>
    //         </View>
    //         <View>
    //           <Text>{item.quantity}</Text>
    //           <Text>{item.price}</Text>
    //         </View>
    //         <View>
    //           <Text>{item.description}</Text>
    //         </View>
    //       </View>
    //     )}
    //     numColumns={1}
    //   />
    // </View>

    <View style={styles.productContainer}>
      <FlatList
        data={product}
        renderItem={({ item }) => (
          <View style={styles.Card}>
            <View>
              <View>
                <Feather
                  name="heart"
                  size={25}
                  color="black"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 5,
                    padding: 4,
                    marginBottom: 10,
                  }}
                  onPress={() => navigation.navigate("wishList")}
                />
                <AntDesign
                  name="pluscircle"
                  size={30}
                  color="#9DC08B"
                  onPress={onSubmit}
                />
              </View>
              <Image
                style={{
                  width: 200,
                  height: 200,
                  alignSelf: "center",
                  borderRadius: 10,
                  marginTop: 20,
                }}
                source={{ uri: `http://172.16.100.96:9090/img/${item.image}` }}
              />
            </View>
            <View style={styles.productInfo}>
              <Text>{item.productName}</Text>
            </View>
            <View>
              <Text>{item.quantity}</Text>
              <Text>{item.price}</Text>
            </View>
            <View>
              <Text>{item.description}</Text>
            </View>
          </View>
        )}
        numColumns={1}
      />
    </View>
  );
};

export default DisplayProducts;

const styles = StyleSheet.create({
  productContainer: {
    marginTop: 30,
    marginBottom: 250,
  },
  categoryText: {
    color: Colors.green,
    paddingHorizontal: 20,
    marginRight: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  Card: {
    height: 370,
    width,
    backgroundColor: Colors.lightGray,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  productInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    color: Colors.green,
  },
});
