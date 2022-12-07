import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import CardCities from '../components/CardCities'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import citiesAction from '../redux/actions/citiesAction'
import { BASE_URL } from '../Api/url'

export default function Cities() {
    const {getCities, getFiltering} = citiesAction 
    let cities = useSelector(store => store.citiesReducer.cities)
    // const filter = useSelector(state => state.citiesFilterReducer)
    // let [search,setSearch] = useState('')
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCities())     
    }, [])

    return (
        <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
            <View style={styles.container}>
            {/* <TextInput placeholder='search...' style={{backgroundColor:'#fff',borderRadius:20,padding:10}} value={search} onChangeText={(item)=>{setSearch(item); dispatch(getHotelsByName(item))}}/> */}
            {cities.length > 0 ?
            cities.map(i => <CardCities name={i.name} photo={i.photo} continent={i.continent} id={i._id} key={i._id}/>)
            : <Text> No cities could be found </Text>} 
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    backgroundImage: {
        opacity: 0.7,
        width: "100%",
        height: "100%"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1,
    },
})
