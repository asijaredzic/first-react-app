import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen'
import ProfileScreen from './screens/ProfileScreen'
import ExerciseScreen from "./screens/ExerciseScreen"
import Exercise1Screen from "./screens/Exercise1Screen"
import QuoteScreen from "./screens/QuoteScreen"
import ListScreen from './screens/ListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListScreen" component={ListScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import TestScreen from './src/screens/TestScreen';
// import ListScreen from './src/screens/ListScreen';

// const navigator=createStackNavigator(
//   {
//   Test:TestScreen,
//   List:ListScreen
// },
// {
//   initialRouteName:"List",
//   defaultNavigationOptions:{
//     title:"App"
//   }
// }
// );

// export default createAppContainer(navigator); 