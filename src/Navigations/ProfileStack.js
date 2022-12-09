import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../Screens/Profile'
import Reactions from '../Screens/Reactions'

export default function ProfileStack() {
    const StackNav = createNativeStackNavigator()
    return (
        <StackNav.Navigator>
            <StackNav.Screen name="ProfileStack" component={Profile} options={{headerShown: false}} />
            <StackNav.Screen name="Reactions" component={Reactions} />
        </StackNav.Navigator>
    )
}