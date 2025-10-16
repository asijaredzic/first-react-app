import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.box1Style}></View>
            <View style={styles.box2Style}></View>
            <View style={styles.box3Style}></View>
            <View style={styles.box4Style}></View>
            <View style={styles.box5Style}></View>
            <View style={styles.box6Style}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column",
        flexWrap: "wrap", // required for alignContent to work
        alignContent: "space-evenly", //n try changhing to center, flex start....
        backgroundColor: "#eee",
    },
    box1Style: {
        width: 100,
        alignSelf: "flex-end",
        height: 100, 
        backgroundColor: "red",
    },
    box2Style: {
        width: 100,
        height: 100, 
        backgroundColor: "green",
    },   
    box3Style: {
        width: 100,
        height: 100, 
        backgroundColor: "blue",
    },       
    box4Style: {
        width: 100,
        height: 100, 
        backgroundColor: "blue",
    },   
    box5Style: {
        width: 100,
        height: 100, 
        backgroundColor: "blue",
    },   
    box6Style: {
        width: 100,
        height: 100, 
        backgroundColor: "blue",
    },   
});

export default BoxScreen;