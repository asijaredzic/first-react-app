import react from 'react'
import { View, Text, StyleSheet, FlatList } from "react-native";

class UsersScreen extends React.Component {
    constuctor() {
        super ();
        this.state = {
            users: [],
        };
    }

    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonData = await data.json();
        this.setState({
            users: jsonData,
        });
    }

    render () {
        const { users }=this.state;
        return (
            <View>
                <Text>Users Screen</Text>
                <Flatlist
                    keyExtractor={(user) => user.id.toString}
                    data = {users}
                    renderItem={({item}) => (
                        <View>
                            <Text>
                                <Text>{item.name}</Text>
                                <Text>{item.email}</Text>
                            </Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles=StyleSheet.create({});

export default UsersScreen;