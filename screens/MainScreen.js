 // importovanje biblioteka
import React from "react";
import { Text, StyleSheet, View } from "react-native";

// kreiranje komponente
const MainScreen = () => {
    return ( <View style={styles.container}>
        <Text style={styles.textStyle}>This is the Main Screen</Text>
    </View>
    )
};

// kreiranje stylesheet-a
// sve select, onda CTRL + KC i onda je sve komentarisanje.
// CTRL + U je za skidanje komentara

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
    },
    textStyle: {
        fontSize: 30,
    },
});

// exportovanje komponente
export default MainScreen;