import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import * as FONT from 'expo-font';
import {
  SafeAreaView,View,Text,StyleSheet, 
} from 'react-native';
import {Home} from './screens/index';
import Tabs from './navigations/tab';
import { loadAsync } from 'expo-font';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }} initialRouteName="Home">
          <Stack.Screen name="Home" component={Tabs}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
