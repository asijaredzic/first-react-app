import React from "react";
import { Test, StyleSheet, View } from "react-native";

const ExerciseScreen = () => {
    // Deklaracija varijabli: let, const

    // koristeci const ne mozemo promijeniti vrijednost varijable
    // const message = "Hi there!";

    // Nova vrijednost u varijabli
    // message = "Moja varijabla ima novu vrijednost!";

    const name = "Asija";
    let surname = "Redžić";

    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{surname}</Text>
        </View>  
    );
    // return <Text>{message}</Text> 
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ExerciseScreen;