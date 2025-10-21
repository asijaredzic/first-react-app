import react from 'react'
import { View, Text, StyleSheet, FlatList } from "react-native";

class PostsScreen extends React.Component {
    constuctor() {
        super ();
        this.state = {
            posts: [],
        };
    }

    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await data.json();
        const FirstTen = jsonData.slice(0, 10)
        this.setState({
            posts: FirstTen,
        });
    }

    render () {
        const {posts}=this.state;
        return (
            <View>
                <Text>Posts Screen</Text>
                <Flatlist
                    keyExtractor={posts => posts.id}
                    data = {posts}
                    renderItem={({item}) => (
                        <View>
                            <Text>
                                <Text>{item.id}</Text>
                                <Text>{item.title}</Text>
                            </Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles=StyleSheet.create({});

export default PostsScreen;