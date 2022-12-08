import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hotels from '../Screens/Hotels'
import Hotel from '../Screens/Hotel'

const StackNav = createNativeStackNavigator();

export default function HotelsStack() {
    return (
        <StackNav.Navigator>
            <StackNav.Screen name="cualquier" component={Hotels} options={{ headerShown: false }} />
            <StackNav.Screen name="Hotel Selected" component={Hotel} />

        </StackNav.Navigator>
    )
}