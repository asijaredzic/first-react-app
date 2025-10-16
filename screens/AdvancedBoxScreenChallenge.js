import React from "react";
import { StyleSheet, View } from "react-native";

const AdvancedBoxScreenChallenge = () => {
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
        backgroundColor: "#eee",
    },
    box1Style: {
        flex: 1,
        width: 100,
        height: 100, 
        backgroundColor: "red",
        alignSelf: "flex-start",
    },
    box2Style: {
        width: 100,
        alignSelf: "center",
        height: 100, 
        backgroundColor: "green",
        alignSelf: "center",
    },   
    box3Style: {
        width: 100,
        height: 100, 
        backgroundColor: "blue",
        alignSelf: "flex-end",
    },       
});

export default AdvancedBoxScreenChallenge;