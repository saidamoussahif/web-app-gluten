import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default ProfileScreen = () => {
  return (
    <TouchableOpacity
    activeOpacity={0.8}
    // onPress={() => navigation.navigate()}
    >
    {/* <View style={styles.card}>
      <View style={{alignItems: 'flex-end'}}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: plant.like
              ? 'rgba(245, 42, 42,0.2)'
              : 'rgba(0,0,0,0.2) ',
          }}>
          {/* <Icon
            name="favorite"
            size={18}
            color={plant.like ? COLORS.red : COLORS.black}
          /> */}
          {/* <Ionicons name="heart-sharp" size={24} color="black" />
        </View>
      </View>

      <View
        style={{
          height: 100,
          alignItems: 'center',
        }}>
        <Image
          source={plant.img}
          source={require('../assets/images/leaves.jpg')}
          style={{flex: 1, resizeMode: 'contain'}}
        />
      </View>

      <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
        {plant.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
        }}>
        <Text style={{fontSize: 19, fontWeight: 'bold'}}>
          ${plant.price}
        </Text>
        <View
          style={{
            height: 25,
            width: 25,
            backgroundColor: COLORS.green,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
            +
          </Text>
        </View>
      </View>
    </View> */} 
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    // backgroundColor: "#7f9b52",
    height: 200,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#7f9b52",
  },
});
