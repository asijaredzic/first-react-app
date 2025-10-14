import React from 'react'
import { View, Text, StyleSheet, Touchable } from "react-native";

const StudentDetails = (props) => {
    console.log(props);
    return (
    <TouchableOpacity onPress={() => console.log("Student:", props.name)}>
        <View>
            <View style={styles.cardWrapper}>
                <View>
                    <Image source={props.image} style={styles.img}></Image>
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.text}>{props.name}</Text>
                    <Image
                        source={require("../assets/heart.png")}
                        style={styles.heartIcon}
                    />
                </View>

                    <Text>{props.description}</Text>
                </View>
            </View>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 8,
        width: '90%',
        alignSelf: "center",
        marginBottom: 15,
    },
    img: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    infoWrapper: {
        marginLeft: 20,
        marginTop: 20,
    },
    text: {
        fontWeight: "bold",
    }
});

export default StudentDetails;