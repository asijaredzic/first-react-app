 // importovanje biblioteka
import React from "react";
import { Text, StyleSheet, View } from "react-native";

// kreiranje komponente
const ProfileScreen = () => {
    return ( <View style={styles.container}>
        <Text style={styles.textStyle}>This is the Profile Screen</Text>
    </View>
    )
};

// kreiranje stylesheet-a
const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#c4dbf5ff',
        alignItems: "center",
        justifyContent: "center",
    },
    textStyle: {
        fontSize: 28,
        color: '#131c80ff'
    },
});

// exportovanje komponente
export default ProfileScreen;