import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native'
import { BASE_URL } from '../Api/url'
import axios from 'axios'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function SignUp() {
    const backgroundImage = { uri: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/501000/501690-barceloneta-beach.jpg' }
    let navigation = useNavigation()
    
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
        <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={{ fontWeight: 'bold', paddingVertical: '2%', paddingHorizontal: '6%', margin: '5%', fontSize: 24 }}>Resgister</Text>
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
                            placeholder='Last name' />
                    </View>
                    <View style={styles.viewInput}>
                        <TextInput
                            style={styles.inputText}
                            value={age}
                            ref={age}
                            label='age'
                            placeholder='Age'
                            keyboardType='numeric' />
                    </View>
                    <View style={styles.viewInput}>
                        <TextInput
                            style={styles.inputText}
                            value={photo}
                            ref={photo}
                            label='photo'
                            placeholder='Photo'
                            keyboardType='url' />
                    </View>
                    <View style={styles.viewInput}>
                        <TextInput
                            style={styles.inputText}
                            value={email}
                            ref={email}
                            label='email'
                            placeholder='Email'
                            keyboardType='email-address'/>
                    </View>
                    <View style={styles.viewInput}>
                        <TextInput
                            style={styles.inputText}
                            value={password}
                            ref={password}
                            label='password'
                            placeholder='Password'
                            secureTextEntry/>
                    </View>
                </View>
                <TouchableOpacity
                onPress={()=>{Alert.alert('Welcome !','Successfully registered',[
                    {text:'OKEY', onPress:()=> navigation.navigate('Home'), style:'default'}
                ])}}           
                    style={{
                        width: '60%',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        borderRadius: 6,
                        marginBottom: 24
                    }}>
                    <Text style={{ color: "#d3d3d3", padding: '5%' }}>Send</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
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
    viewInput: {
        backgroundColor: 'white',
        borderRadius: 48,
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
        borderRadius: 48,
    }
})
