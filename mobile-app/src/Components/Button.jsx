import {Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Btn({ bgColor, btnLabel, textColor, Press }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 40,
        paddingVertical: 5,
        marginVertical: 10,
      }}
    >
      <Text style={{ color: textColor, fontSize: 20, fontWeight: "semibold", backgroundColor: bgColor  }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
