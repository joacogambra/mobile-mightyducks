import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import MyProfile from '../components/MyProfile'

export default function Profile() {
    const backgroundImage = { uri: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/501000/501690-barceloneta-beach.jpg' }
    let name = 'Anne'
    let lastName = 'Hathaway'
    let photo = 'https://es.web.img2.acsta.net/pictures/19/10/16/01/22/0121805.jpg'
    let age  = 29
    let email = 'annehathaway@gmail.com'    
    let _id = '636d394853e918bedbd136e3'
    
    return (
        <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
            <MyProfile name={name} lastName={lastName} photo={photo} age={age} email={email} id={_id} key={_id} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",     
    },

})