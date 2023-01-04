import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import MyReactions from '../components/MyReactions'

export default function Reactions() {
    const backgroundImage = { uri: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/501000/501690-barceloneta-beach.jpg' }
    return (
        <ScrollView>
            <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
                <MyReactions />
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: "100%"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

