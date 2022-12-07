import React from 'react'
import { View, Text, Image, Button } from 'react-native'

export default function CardCities({  name, photo, continent, id, userId }) {
    return (
        <View style={{ backgroundColor: '#f5f5f5', padding: 10, margin: 10, borderRadius:12 }}>     
            <Image style={{ width: 280, height: 280, margin:10 }} source={{ uri: photo }}>
                <Text style={{ color:'white', textAlign: 'center' }}>{name}</Text>
                <Text style={{ color:'white', textAlign: 'center' }}>Continent: {continent}</Text>
            </Image>
            <Button title='More'></Button>
        </View>
    )
}