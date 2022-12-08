import React from 'react'
import { ImageBackground, StyleSheet, View, FlatList, Text, Dimensions } from 'react-native'
import hotelsActions from '../redux/actions/hotelsActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function Hotels() {
    const { getHotels, filter } = hotelsActions
    let hotels = useSelector(state => state.hotelsReducer.hotels)
    const dispatch = useDispatch()
    let { initial } = useSelector(state => state.hotelsReducer)

    useEffect(() => {
        if (initial) {
            dispatch(getHotels())
        }

        // eslint-disable-next-line    
    }, [])

    const dimension = Dimensions.get('window').width;
    return (
        <View style={{ width: dimension.width, flex: 1 }}>
            <FlatList
                data={hotels}
                style={styles.hotelsContainer}
                // horizontal={false}
                // keyExtractor={(item) => item._id}
                // onPress={()=>} 
                renderItem={({ item, index }) => {
                    <ImageBackground
                        style={styles.container}
                        source={{ uri: item.photo }}
                        resizeMode='cover'>
                        <View>
                            <Text style={styles.text}>{item.name}</Text>
                            <Text style={styles.text}>{item.capacity}</Text>
                        </View>
                    </ImageBackground>
                }}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        heigth: "100%",
        opacity: 0.9
    },
    hotelsContainer: {
        flex: 1,
        width: 260,
        height: 220,
        marginTop: 15,
        borderRadius: 15,
        overflow: "hidden",
    }, text: {
        paddingTop: 1,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
