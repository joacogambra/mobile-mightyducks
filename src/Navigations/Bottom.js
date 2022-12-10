import React from "react";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'
import Home from '../Screens/Home'
import SignUp from '../Screens/SignUp'
import Cities from "../Screens/Cities";
import HotelsStack from "./HotelsStack"
import { useSelector } from 'react-redux';

import UserStack from "./UserStack";
import Reactions from '../Screens/Reactions'
import CityStack from "./CityStack";
import ProfileStack from "./ProfileStack";

export default function Bottom() {
  const StackNav = createBottomTabNavigator()


  let { name, photo, logged } = useSelector(state => state.userReducer)

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
      <StackNav.Screen name="Cities" component={CityStack} options={{
        headerStyle: {
          backgroundColor: 'rgba(197, 68, 186, 0.59)',
        },
        tabBarLabel: 'Cities',
        tabBarIcon: () => (<Image source={require('../../assets/city.png')} style={{ width: 25, height: 25 }}></Image>)
      }} />
      <StackNav.Screen name="Sign Up" component={SignUp} options={{
        headerStyle: {
          backgroundColor: 'rgba(197, 68, 186, 0.59)',
        },
        tabBarLabel: 'Sign Up',
        tabBarIcon: () => (<Image source={require('../../assets/register.png')} style={{ width: 25, height: 25 }}></Image>)
      }} />
      <StackNav.Screen name={logged ? ('Profile') : ('Log In')} component={ProfileStack} options={{
        headerStyle: {
          backgroundColor: 'rgba(197, 68, 186, 0.59)',
        },
        // tabBarLabel: 'Log In',
        tabBarIcon: () => (<Image source={photo ? { uri: photo } : (require('../../assets/login.png'))} style={{ width: 25, height: 25 }}></Image>)
      }} />
    </StackNav.Navigator>
  )
}
