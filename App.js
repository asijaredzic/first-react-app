import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen'
import ProfileScreen from './screens/ProfileScreen'
import ExerciseScreen from "./screens/ExerciseScreen"
import Exercise1Screen from "./screens/Exercise1Screen"
import QuoteScreen from "./screens/QuoteScreen"


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="QuoteScreen" component={QuoteScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

