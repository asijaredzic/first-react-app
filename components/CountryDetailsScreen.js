import React from "react";
import { View, Text, StyleSheet } from "react-native";

class CountryDetailsScreen extends React.Component {
  render() {
    const { selectedCountry } = this.props.route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{selectedCountry.name}</Text>
        <Text style={styles.info}>Country: {selectedCountry.country}</Text>
        <Text style={styles.info}>Description: {selectedCountry.description}</Text>
        <Text style={styles.info}>Population: {selectedCountry.population}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
  },
  info: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default CountryDetailsScreen;