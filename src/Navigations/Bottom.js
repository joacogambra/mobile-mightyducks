import React from "react";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'
import Home from '../Screens/Home'
import Hotels from '../Screens/Hotels'
import SignUp from '../Screens/SignUp'
import Cities from "../Screens/Cities";


const StackNav = createBottomTabNavigator();


export default function Bottom() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => (<Image source={require('../../assets/home.png')} style={{ width: 25, height: 25 }}></Image>)
      }} />
      <StackNav.Screen name="Hotels" component={Hotels} options={{
        tabBarLabel: 'Hotels',
        tabBarIcon: () => (<Image source={require('../../assets/hotel.png')} style={{ width: 25, height: 25 }}></Image>)
      }} />
      <StackNav.Screen name="Cities" component={Cities} options={{
        tabBarLabel: 'Cities',
        tabBarIcon: () => (<Image source={require('../../assets/city.png')} style={{ width: 25, height: 25 }}></Image>)
      }} />
      <StackNav.Screen name="SignUp" component={SignUp} />
    </StackNav.Navigator>
  )
}
