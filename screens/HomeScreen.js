import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Welcome to Home Screen</Text>

      <Button
        title="Go back to Menu Screen"
        onPress={() => props.navigation.navigate("Menu")}
      />

      <TouchableOpacity
        style={styles.touchableBtn}
        onPress={() => props.navigation.navigate("Profile")}
      >
        <Text style={styles.btnText}>Go to Profile Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
  touchableBtn: {
    backgroundColor: "purple",
    padding: 15,
    marginTop: 20,
    marginHorizontal: 50,
    borderRadius: 8,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;