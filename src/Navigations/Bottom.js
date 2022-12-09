import React from "react";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home'
import SignUp from '../Screens/SignUp'
import Cities from '../Screens/Cities'
import Reactions from '../Screens/Reactions'
import Profile from "../Screens/Profile";
import Itineraries from "../Screens/Itineraries";
import CityStack from "./CityStack";
import ProfileStack from "./ProfileStack";

const StackNav = createBottomTabNavigator();


export default function Bottom() {
  return (
    <StackNav.Navigator>
    <StackNav.Screen name="Home" component={Home} />
    <StackNav.Screen name="SignUp" component={SignUp} />
    <StackNav.Screen name="Cities" component={CityStack} />
    <StackNav.Screen name="Profile" component={ProfileStack} />
  </StackNav.Navigator>
  )
}
