import React from "react";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'
import Home from '../Screens/Home'
import SignUp from '../Screens/SignUp'
import Cities from "../Screens/Cities";
import Hotel from '../Screens/Hotel'
import HotelsStack from "./HotelsStack";

const StackNav = createBottomTabNavigator()


export default function Bottom() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="Home" component={Home} options={{
        headerStyle: {
          backgroundColor: 'rgba(156, 89, 182, 0.481)',
        },
        tabBarLabel: 'Home',
        tabBarIcon: () => (<Image source={require('../../assets/home.png')} style={{ width: 25, height: 25 }}></Image>)
      }} />
      <StackNav.Screen name="Hotels" component={HotelsStack} options={{
        headerStyle: {
          backgroundColor: 'rgba(156, 89, 182, 0.678)',
        },
        tabBarLabel: 'Hotels',
        tabBarIcon: () => (<Image source={require('../../assets/hotel.png')} style={{ width: 25, height: 25 }}></Image>)
      }} />
      <StackNav.Screen name="Cities" component={Cities} options={{
        headerStyle: {
          backgroundColor: 'rgba(197, 68, 186, 0.59)',
        },
        tabBarLabel: 'Cities',
        tabBarIcon: () => (<Image source={require('../../assets/city.png')} style={{ width: 25, height: 25 }}></Image>)
      }} />
      <StackNav.Screen name="SignUp" component={SignUp} />
      <StackNav.Screen name="details" component={Hotel} />

    </StackNav.Navigator>
  )
}
