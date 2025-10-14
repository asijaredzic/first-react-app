import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import ProfileInfo from '../components/ProfileInfo';

const projects = [
    { id: "1", image: require("../assets/project1.jpg"), title: "Project 1"},
    { id: "2", image: require("../assets/project2.jpg"), title: "Project 2"},
];

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <ProfileInfo />

            <View style={styles.projectsHeader}>
                <Text style={styles.projectsTitle}>Projects</Text>
                <TouchableOpacity>
                    <Text style={styles.viewSall}>View All</Text>
                </TouchableOpacity>
            </View>

            <FlatList
            data={projects}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.projectCard}>
                    <Image source={item.image} style={styles.projectImage} />
                    <Text style={styles.projectTitle}>{item.title}</Text>
                </View>
            )}
          />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },
    projectsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 20,
    },
    projectsTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    viewSall: {
        color: "#FFD700",
        fontWeight: "bold",
    },
    projectCard: {
        margin: 10,
    },
    projectImage: {
        width: 200,
        height: 120,
        borderRadius: 10,
    },
    projectTitle: {
        textAlign: "center",
        marginTop: 5,
    },
});

export default ProfileScreen;