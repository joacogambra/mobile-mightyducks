import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import CardCities from '../components/CardCities'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import citiesAction from '../redux/actions/citiesAction'
import { BASE_URL } from '../Api/url'

export default function Cities() {
    const backgroundImage = { uri: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/501000/501690-barceloneta-beach.jpg' }
    const { getCities, getFiltering } = citiesAction
    let cities = useSelector(store => store.citiesReducer.cities)
    // const filter = useSelector(state => state.citiesFilterReducer)
    // let [search,setSearch] = useState('')
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCities())
    }, [])

    return ( 
        <ScrollView>
            <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
                {/* <View style={styles.container}> */}
                    {cities.length > 0 ?
                        cities.map(i => <CardCities name={i.name} photo={i.photo} continent={i.continent} id={i._id} key={i._id} />)
                        : <Text> No cities could be found </Text>}
                {/* </View> */}
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
