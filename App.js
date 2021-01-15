import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Home,Restaurant,Order} from './screens/index';
import Tabs from './navigation/tab';
const Stack = createStackNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName="Tabs">
        <Stack.Screen name="Tabs" component={Tabs}></Stack.Screen>
        <Stack.Screen name="Restaurant" component={Restaurant}></Stack.Screen>
        <Stack.Screen name="Order" component={Order}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;