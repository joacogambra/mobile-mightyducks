import React from "react";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home'

const StackNav = createBottomTabNavigator();


export default function Bottom() {
  return (
    <StackNav.Navigator>
    <StackNav.Screen name="Home" component={Home} />
  </StackNav.Navigator>
  )
}
