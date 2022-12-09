import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import axios from 'axios'
import { BASE_URL } from '../Api/url'
import CardItinerary from '../components/CardItinerary'
import { View, Text, StyleSheet, ImageBackground, ScrollView, Button } from 'react-native'

export default function Itineraries() {
    // let { id } = useRoute().params
    let id= '636d39386f873da185c9a583'
    let [itineraries, setItineraries] = useState([])
    let navigation = useNavigation()
    const backgroundImage = { uri: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/501000/501690-barceloneta-beach.jpg' }

    useEffect(() => {
        axios.get(`${BASE_URL}itineraries?citiId=${id}`)
            .then(res => setItineraries(res.data.response))
            .catch(error => error.message)
    })
    return (
        <ScrollView>
            <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
                {itineraries.length > 0 ? itineraries.map(i => <CardItinerary name={i.name} photo1={i.photo[0]} key={i._id} description={i.description} price={i.price} duration={i.duration}/>) 
                : <Text> No activities could be found</Text>}
            </ImageBackground>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
})
