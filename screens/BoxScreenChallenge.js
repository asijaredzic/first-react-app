import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreenChallenge = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.box1Style}></View>
            <View style={styles.box2Style}></View>
            <View style={styles.box3Style}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly", // required for alignContent to work
        alignItems: "center", //n try changhing to center, flex start....
        backgroundColor: "#eee",
    },
    box1Style: {
        width: 100,
        height: 100, 
        backgroundColor: "red",
    },
    box2Style: {
        width: 100,
        alignSelf: "center",
        height: 100, 
        backgroundColor: "green",
    },   
    box3Style: {
        width: 100,
        height: 100, 
        backgroundColor: "blue",
    },       
});

export default BoxScreenChallenge;