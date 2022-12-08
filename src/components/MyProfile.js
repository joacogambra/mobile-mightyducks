import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function MyProfile({ name, lastName, photo, age, email, _id }) {

    return (
        <View style={styles.containerView}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: "bold", fontSize: 42 }}>{name} {lastName}</Text>
            <Image style={{ width: 310, height: '100%', margin: 10, resizeMode: 'cover' }} source={{ uri: photo }} />
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: "bold", fontSize: 32}}>Age: {age}</Text>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: "bold", fontSize: 32}}>Email: {email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerView: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        borderWidth: 1,
        backgroundColor: 'rgba(118, 117, 117, 0.65)',
        borderRadius: 20,
        shadowColor: 'rgba(109, 109, 109, 1)',
        borderBottomWidth: 0,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        margin: 5,  
    }
})
