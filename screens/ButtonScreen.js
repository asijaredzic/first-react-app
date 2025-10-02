import React from "react";
import { Text, StyleSheet, View, Button  } from "react-native";

const ButtonScreen = () => {
    let counter = 0;
    return (
        <View>
            <Text>Button Screen</Text>
            <Button 
            title="Click me"
            onPress={() => console.log("Button Clicked", counter++)}
            ></Button>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ButtonScreen;