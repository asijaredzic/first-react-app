import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MenuScreen = (props) => {
    console.log(props);
    return (
    <View>
        <Text style={styles.text}>Welcome to Menu Screen</Text>
        
        <Button
          title="Go to List Screen"
          onPress= {() => props.navigation.navigate("List")}
        />

        <Button
          title="Go to Home Page"
          onPress= {() => props.navigation.navigate("Home")}
        />

        <TouchableOpacity
          style={styles.touchableBtn}
          onPress={() => props.navigation.navigate("Quiz")}
        >
        <Text style={styles.btnText}>Go to Quiz Screen</Text>
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

export default MenuScreen;