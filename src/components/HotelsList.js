import React from 'react'
import { ImageBackground, StyleSheet, View, FlatList, Text, Pressable } from 'react-native'

export default function HotelsList(props) {
    let hotels = props.props
    // console.log('flatlist')
    // console.log(hotels)
    let onPressFunction = () => {
        <Text> Pressed</Text>
    }


    return (
        // <Pressable onPress={onPressFunction}>
        <FlatList
            data={hotels}

            style={styles.container}
            renderItem={({ item }) =>
                <ImageBackground
                    source={{ uri: item.photo[0] }}
                    style={styles.hotelsContainer}
                    // resizeMode='cover'
                    key={item._id}>
                    <View>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>Capacity: {item.capacity}</Text>
                    </View>
                </ImageBackground>
            }
        />
        // </Pressable>


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        width: "80%",
        heigth: "80%",
        backgroundColor: 'white',
        borderRadius: 15,
        width: '100%',
        height: '100%',

        paddingLeft: 15,
        paddingRight: 15,

    },
    hotelsContainer: {
        flex: 1,
        width: '80%',
        height: '100%',
        marginTop: 15,
        borderRadius: 15,
        borderColor: 'red',
        borderWidth: 1
    },
    text: {
        paddingTop: 1,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
