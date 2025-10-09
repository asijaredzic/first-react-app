import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen'
import QuoteScreen from "./screens/QuoteScreen"
import ListScreen from './screens/ListScreen';
import ButtonScreen from './screens/ButtonScreen';
import { createAppContainer } from '@react-navigation/native';
import MenuScreen from './screens/MenuScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const navigator = createStackNavigator();

 export default function App() {
   return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Name"> <Stack.Screen name="Main Screen" component={MainScreen}></Stack.Screen>
      <Stack.Screen name="Main Screen" component={MainScreen}></Stack.Screen>
      <Stack.Screen name="List Screen" component={ListScreen}></Stack.Screen>
      <Stack.Screen name="Quote Screen" component={QuoteScreen}></Stack.Screen>
      <Stack.Screen name="Menu" component={MenuScreen}></Stack.Screen>
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
      <Stack.Screen name="Button Screen" component={ButtonScreen}></Stack.Screen>
      <Stack.Screen name="Students" component={StudentsScreen}></Stack.Screen>
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