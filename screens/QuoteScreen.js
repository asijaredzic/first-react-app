import React from "react";
import { Test, StyleSheet, View } from "react-native";

const QuoteScreen = () => {
    const quote = "The only limit to our realization of tomorrow will be our doubts of today";
    const author = "Franklin D. Roosevelt";

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{quote}</Text>
            <Text style={styles.message}>— {author}</Text>
        </View>  
    );
    // return <Text>{message}</Text> 
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#fffaf0",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
    },
    quote : {
        fontSize: 22,
        fontWeight: "500",
        color: "#333",
        textAlign: 'center',
        marginBottom: 15,
        fontStyle: "italic",

    },
    author : {
        fontSize: 18,
        fontWeight: "bold",
        color: "#555",
    }
})

export default QuoteScreen;