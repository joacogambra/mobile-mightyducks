import React from "react";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home'
import Hotels from '../Screens/Hotels'
import SignUp from '../Screens/SignUp'
const StackNav = createBottomTabNavigator();


export default function Bottom() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Home',
        image: { uri: '/assets/hotel.png' }
      }} />
      <StackNav.Screen name="Hotels" component={Hotels} />
      {/* <StackNav.Screen name="SignUp" component={SignUp} /> */}
    </StackNav.Navigator>
  )
}
