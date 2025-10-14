import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ProfileInfo = (props) => {
  return (
    <View style={styles.card}>
      <Image
        source={require("../assets/profile.jpg")}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Mary Williams</Text>
      <Text style={styles.role}>UI/UX Designer</Text>
      <Text style={styles.description}>
        Im passionate about creating beautiful designs
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Hire Him</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  role: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default ProfileInfo;