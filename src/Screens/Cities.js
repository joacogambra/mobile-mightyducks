import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, ImageBackground } from 'react-native'
import CardCities from '../components/CardCities'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import citiesAction from '../redux/actions/citiesAction'
import { BASE_URL } from '../Api/url'

export default function Cities() {
    const {getCities, getFiltering} = citiesAction 
    let cities = useSelector(store => store.citiesReducer.cities)
    const filter = useSelector(state => state.citiesFilterReducer)
    let [search,setSearch] = useState('')
    let dispatch = useDispatch()

   

    return (
        <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
            <View style={styles.container}>
                <CardCities/>
            </View>
        </ImageBackground>
    )
}
