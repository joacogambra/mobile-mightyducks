import React from 'react'
import { StyleSheet, View, Alert, TextInput, Button, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from "../Api/url";
import { useState, useEffect } from 'react';

export default function EditProfile() {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState('')
    const [edad, setEdad] = useState('')
    let dispatch = useDispatch()
    let { _id, name, lastName, age, photo, token } = useSelector(state => state.userReducer)

    let handleSubmit = (e) => {

        let form = {
            name: nombre || name,
            photo: photo,
            lastName: apellido || lastName,
            age: edad || age,
        }
        let headers = { headers: { Authorization: `Bearer ${token}` } }

        axios.patch(`${BASE_URL}api/auth/me/${_id}`, form, headers)
            .then(response => {
                Alert.alert(
                    ` ${response.data.message}`,
                )
                console.log(response);
            })

            .catch(error => {
                console.log(error);
                Alert.alert(
                    ` ${error.data.message}`,
                )

            })

    }



    return (
        <View style={styles.container}>


            <View style={styles.form}>
                <Text style={styles.titleform}>Edit your profile:</Text>
                <Text style={styles.text}>(just complete what you want yo modify)</Text>
                <TextInput
                    style={styles.input}

                    //  value={name}
                    placeholder='Name'
                    onChangeText={(name) => setNombre(name)} />

                <TextInput
                    style={styles.input}
                    // value={lastName}
                    placeholder='Last Name'
                    onChangeText={(lastName) => setApellido(lastName)} />
                <TextInput
                    style={styles.input}
                    // value={age}
                    placeholder='Age'
                    onChangeText={(age) => setEdad(age)} />

                <Pressable onPress={() => handleSubmit()} style={styles.show}>

                    <Text style={styles.text} >Send!</Text>

                </Pressable>

            </View>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        heigth: "100%",
        backgroundColor: '#dda0dd',
        padding: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center'

    },
    form: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    input: {
        height: 40,
        width: 200,
        borderWidth: 1,
        padding: 10,
        color: 'black',
        padding: 10,
        backgroundColor: 'white',
        margin: 7,
        borderRadius: 20,
    },
    titleform: {
        fontSize: 40,
        marginTop: 50,
        color: 'white'
    },
    show: {
        backgroundColor: "indigo",
        width: "80%",
        paddingHorizontal: 15,
        alignItems: "center",
        marginTop: 10,
        borderRadius: 30,
        marginBottom: 15,

    },
    text: {
        width: '50%',
        padding: 4,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});