import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MenuScreen = (props) => {
    console.log(props);
    return (
    <View>
        <Text style={styles.text}>Welcome to Menu Screen</Text>
        
        <Button
          title="Go back to Home Screen"
          onPress= {() => props.navigation.navigate("Home")}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20,
    }
});

export default ProfileScreen;