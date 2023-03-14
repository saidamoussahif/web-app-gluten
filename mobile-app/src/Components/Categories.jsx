import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Colors from '../Constants/Colors'
import { Dimensions } from 'react-native'
const width = Dimensions.get("screen").width/2-30;
import  { useEffect, useState } from "react";



const Categories = () => {
	const [category, setCategory] = useState("");
  const getCategories = async () => {
    const response = await fetch(
      "http://192.168.9.33:9090/api/categories/getAll"
    );
    const data = await response.json();
    setCategory(data);
  };
  


  useEffect(() => {
    getCategories();
  });
  return (
	<View>
	  <FlatList
        horizontal={true}
        style={styles.categoryContainer}
        data={category}
        renderItem={({ item }) => (
          <View style={styles.categoryText}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
	</View>
  )
}

export default Categories

const styles = StyleSheet.create({
	categoryContainer: {
		marginTop: 30,
	  },
	  categoryText: {
		color: Colors.green,
		paddingHorizontal: 20,
		marginRight: 10,
		fontSize: 20, 
		fontWeight: "bold",
	  },
	  Card: {
		height: 225,
		width,
		backgroundColor: Colors.lightGray,
		marginHorizontal: 2,
		borderRadius: 10,
		marginBottom: 20,
		padding: 15,
	
	   },
})