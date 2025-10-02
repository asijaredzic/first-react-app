import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const ButtonScreen = () => {
    let counter = 0;
    let counter1 = 1;
    return (
        <View>
            <Text>Button Screen</Text>
            <Button 
            title="Click me"
            color = "purple"
            onPress={() => console.log("Button Clicked", counter++)}
            ></Button>
            <TouchableOpacity
            style={styles.touchableBtn}
            onPress={() => console.log("TouchableOpacity clicked: ", counter1++)}
            >
                <Text style={txtStyle}>Click Touchable Element</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    touchableBtn: {
        backgroundColor: "purple",
        marginVertical: 15,
        padding: 20,
        barrier: 6,
        marginHorizontal: 20,
    },
    txtStyle: {
        color: "white",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
    },
});


export default ButtonScreen;