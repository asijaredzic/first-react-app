import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import StudentDetails from "../components/StudentsDetail";

const StudentsScreen = () => {
    return (
    <View>
        <Text style={styles.text}>Student Screen</Text>
        <StudentDetails 
        name="Asija" 
        image={require("../assets/Avatar-1.png")}
        description="Prvi student"
        />

        <StudentDetails 
        name="Ibrahim" 
        image={require("../assets/Avatar-1.png")}
        description="Drugi student"
        />

        <StudentDetails 
        name="Sergej" 
        image={require("../assets/Avatar-1.png")}
        description="Treci student"
        />

        <StudentDetails 
        name="Zejneb" 
        image={require("../assets/Avatar-1.png")}
        description="Cetvrti student"
        />
    </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20,
    },
});

export default StudentsScreen;