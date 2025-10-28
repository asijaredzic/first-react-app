import React from "react";
import { Text, FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import data from "../data/countries.json";

class CountriesScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    this.setState({
      countries: data,
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.screenTitle}>Countries Screen</Text>
        <FlatList
          data={this.state.countries}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                this.props.navigation.navigate("Details", { country: item })
              }
            >
              <Text style={styles.countryName}>{item.name}</Text>
              <Text>Country: {item.country}</Text>
              <Text>Description: {item.description}</Text>
              <Text>Population: {item.population}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 15,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  countryName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CountriesScreen;