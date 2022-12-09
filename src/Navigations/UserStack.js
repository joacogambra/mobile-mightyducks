import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import { useSelector } from 'react-redux';





export default function UserStack() {
    const StackNav = createNativeStackNavigator();
    let { logged } = useSelector(state => state.userReducer)
    console.log(logged)
    return (
        <StackNav.Navigator>
            <StackNav.Screen name="cualquier" component={SignIn} options={{ headerShown: false }} />
            <StackNav.Screen name="SignUp" component={SignUp} />

        </StackNav.Navigator>
    )
}