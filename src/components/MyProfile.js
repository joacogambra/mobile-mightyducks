import React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export default function MyProfile({ name, lastName, photo, age, email, _id }) {
    let navigation = useNavigation()

    return (
        <View style={styles.containerView}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: "bold", fontSize: 38 }}>{name} {lastName}</Text>
            <Image style={{ width: 310, height: 280, margin: 10, resizeMode: 'cover' }} source={{ uri: photo }} />
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: "bold", fontSize: 28 }}>Age: {age}</Text>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: "bold", fontSize: 28 }}>Email: {email}</Text>
            <View style={{ marginTop: 23 }}>
                <Button title='My Reactions' onPress={() => navigation.navigate('Reactions')}></Button>
            </View>
            <View style={{ marginTop: 23 }}>
                <Button title='Edit' onPress={() => navigation.navigate('Edit Profile')}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerView: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        height: '100%',
        borderWidth: 1,
        backgroundColor: 'rgba(118, 117, 117, 0.55)',
        borderRadius: 20,
        shadowColor: 'rgba(109, 109, 109, 1)',
        borderBottomWidth: 0,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 34,
        textShadowColor: '#303030'
    }
})
