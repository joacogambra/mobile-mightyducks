import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { BASE_URL } from '../Api/url'
import axios from 'axios'

export default function SignUp() {
    const backgroundImage = { uri: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/501000/501690-barceloneta-beach.jpg' }
    let name = React.useRef()
    let lastName = React.useRef()
    let age = React.useRef()
    let photo = React.useRef()
    let email = React.useRef()
    let password = React.useRef()
    let signup = React.useRef()

    async function registration(register) {
        register.preventDefault()
        let registrationdata = {
            name: name.current.value,
            lastName: lastName.current.value,
            age: age.current.value,
            photo: photo.current.value,
            email: email.current.value,
            password: password.current.value,
        }
        await axios.post(`${BASE_URL}api/auth/sign-up`, registrationdata)
            .then(res => res.data.response)
            .catch(error => console.log(error))
    }

    return (
        // <ScrollView style={{ flex: 1 }} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', height: "100%" }}>
        <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={{ fontWeight: 'bold', paddingVertical: '2%', paddingHorizontal: '6%', margin: '5%', fontSize: 24 }}>Sign Up</Text>
                <View onSubmit={registration} ref={signup} >
                    <View style={styles.viewInput}>
                        <TextInput
                            style={styles.inputText}
                            value={name}
                            ref={name}
                            label='name'
                            placeholder='Name' />
                    </View>
                    <View style={styles.viewInput}>
                        <TextInput
                            style={styles.inputText}
                            value={lastName}
                            ref={lastName}
                            label='lastName'
                            placeholder='lastName' />
                    </View>
                    <View style={styles.viewInput}>
                        <TextInput
                            style={styles.inputText}
                            value={age}
                            ref={age}
                            label='age'
                            placeholder='age'
                            keyboardType='numeric' />
                    </View>
                    <View style={styles.viewInput}>
                        <TextInput
                            style={styles.inputText}
                            value={photo}
                            ref={photo}
                            label='photo'
                            placeholder='photo'
                            keyboardType='url' />
                    </View>
                    <View style={styles.viewInput}>
                        <TextInput
                            style={styles.inputText}
                            value={email}
                            ref={email}
                            label='email'
                            placeholder='email'
                            keyboardType='email-address'/>
                    </View>
                    <View style={styles.viewInput}>
                        <TextInput
                            style={styles.inputText}
                            value={password}
                            ref={password}
                            label='password'
                            placeholder='password'/>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        width: '60%',
                        alignItems: 'center',
                        backgroundColor: 'morado medio',
                        borderRadius: 6,
                        marginBottom: 24
                    }}>
                    <Text style={{ color: "#d3d3d3", padding: '5%' }}>Send</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        // </ScrollView>
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
    viewInput: {
        opacity: 1,
        borderRadius: 6,
        width: 280,
        height: 48,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    inputText: {
        opacity: 1,
        height: 32,
        marginLeft: 14,
        borderBottomColor: '#303030',
        flex: 1,
        borderRadius: 6,
    }
})
