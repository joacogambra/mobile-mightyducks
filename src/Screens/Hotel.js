import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native"
import { useEffect } from "react"
import axios from 'axios'
import BASE_URL from '../Api/url'
import { useDispatch, useSelector } from 'react-redux'
import hotelsActions from '../redux/actions/hotelsActions'

export default function Hotel({ navigation, route }) {
    const idHotel = route.params.id
    let { getOneHotel } = hotelsActions
    let { hotel } = useSelector(state => state.hotelsReducer)
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getOneHotel(idHotel))

    }, [idHotel])





    return (
        hotel && (<View style={styles.container}>
            <View >
                <Text style={styles.text}>{hotel.name}</Text>
            </View>
            <Image
                source={{ uri: hotel.photo[0] }}
                style={styles.hotelsContainer}
                // resizeMode='cover'
                key={hotel._id}>

            </Image>
            <View>
                <Text style={styles.text}>Capacity: {hotel.capacity}</Text>
            </View>
            <TouchableOpacity
                style={styles.show}
                onPress={() => navigation.navigate('Shows', { id: hotel._id })}
            >
                <Text style={styles.text}>View Shows</Text>
            </TouchableOpacity>
        </View>)
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        heigth: "100%",
        backgroundColor: '#dda0dd',
        padding: 15,
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    hotelsContainer: {
        flex: 1,
        width: '100%',
        height: '70%',
        marginTop: 15,
        marginBottom: 15,
        borderColor: 'white',
        borderWidth: 7,
        borderRadius: 10,

    },
    text: {
        paddingTop: 1,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center'
    },
    show: {
        backgroundColor: "indigo",
        width: "50%",
        alignItems: "center",
        marginTop: 10,
        borderRadius: 30,
        marginBottom: 15,

    }
});
