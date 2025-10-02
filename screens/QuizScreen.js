import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const QuizScreen = () => {
    let correctAnswer = "pariz";

    return (
        <View styles={styles.container}>
            <Text styles={styles.title}>quiz screen</Text>
            <Text styles={styles.question}>koja je prijestolnica francuske?</Text>

            <TouchableOpacity
            style={styles.btn}
            onPress={() => console.log("netacno: berlin")}
            >
                <Text styles={styles.btnText}>berlin</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.btn}
            onPress={() => console.log("tacno: pariz")}
            >
                <Text styles={styles.btnText}>pariz</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.btn}
            onPress={() => console.log("netacno: madrid")}
            >
                <Text styles={styles.btnText}>madrid</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.btn}
            onPress={() => console.log("netacno: rim")}
            >
                <Text styles={styles.btnText}>rim</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifContent: "center"
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    question: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center",
    },
    btn: { 
        backgroundColor: "purple",
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
    },
    btnText: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
    },
});


export default QuizScreen;