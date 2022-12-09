import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cities from '../Screens/Cities'
import Itineraries from '../Screens/Itineraries';

export default function CityStack() {
    const StackNav = createNativeStackNavigator()
    return (
        <StackNav.Navigator>
            <StackNav.Screen name="CitiesStack" component={Cities} options={{headerShown: false}} />
            <StackNav.Screen name="Itineraries" component={Itineraries} />
        </StackNav.Navigator>
    )
}