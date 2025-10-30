import React from "react";
import { View, Text, FlatList, StyleSheet, Image, Text } from "react-native";
import data from "../data/products.json";

class ProductsScreen extends React.Component {
    constructor () {
        super();
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        this.setState({
            products: data,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Products</Text>

                <FlatList 
                    data={this.state.products}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <View style={styles.card}>
                            <Image source={{ uri: item.image }} style={styles.image} />

                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.category}>{item.category}</Text>
                            <Text style={styles.description}>{item.description}</Text>

                            <Text style={styles.price}>{item.price}</Text>
                            <Text style={styles.stock}>Stock: {item.stock}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        paddingVertical: 15,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
    },
    card: {
        backgroundColor: "white",
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    image: {
        width: 200,
        height: 150,
        resizeMode: "container",
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
        color: "#222"
    },
    category: {
        fontSize: 14,
        color: "#888",
        marginTop: 3,
        marginBottom: 5,
    },
    description: {
        textAlign: "center",
        marginVertical: 8,
        color: "#666",
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#1e90ff",
        marginBottom: 5,
    },
    stock: {
        fontSize: 14,
        color: "#333",
    },
});

export default ProductsScreen;