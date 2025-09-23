import React from "react";
import { Test, StyleSheet, View } from "react-native";

const Exercise1Screen = () => {
    const name = "Asija";
    const surname = "Redžić";
    const message = "Dobrodošla u React Native!"

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name} {surname}</Text>
            <Text style={styles.message}>{message}</Text>
        </View>  
    );
    // return <Text>{message}</Text> 
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#f0f8ff",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title : {
        fontSize: 28,
        fontWeight: "bold",
        color: "#2e3a59"

    },
    message : {
        fontSize: 18,
        textAlign: 'center',
        color: "#444",
    }
})

export default Exercise1Screen;

// napraviti komponentu quotescreen 
// ona prikazuje citat i negovog autora
// koristit let i const varijable za citat i autora