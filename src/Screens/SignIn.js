import React from 'react'
import { StyleSheet, View, Alert, TextInput, Button, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import userActions from '../redux/actions/userActions'
import axios from 'axios'
import { BASE_URL } from "../Api/url";
import { useState, useEffect } from 'react';

export default function SignIn({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let dispatch = useDispatch()
    let { signIn } = userActions
    let { token } = useSelector(state => state.userReducer)
    let { keepLog } = userActions


    useEffect(() => {
        // AsyncStorage.setItem('user', JSON.stringify({ token: { user: token } }))
        // let token = JSON.parse(AsyncStorage.getItem('token'))
        if (token) {
            dispatch(keepLog(token))
        }
        // eslint-disable-next-line
    }, [])

    async function handleSubmit() {
        const login = {
            email: email,
            password: password,
        }

        axios.post(`${BASE_URL}api/auth/sign-in`, login)
            .then(response => {

                dispatch(signIn(response.data))
                Alert.alert(
                    ` ${response.data.message}`,
                )
            }
            )
            .catch(error => {
                console.log(error.response.data.message);

            })



    }





    return (
        <View style={styles.container}>


            <View style={styles.form}>
                <Text style={styles.titleform}>Welcome Back!</Text>

                <TextInput
                    style={styles.input}
                    isRequired
                    value={email}
                    placeholder="Email"
                    onChangeText={(mail) => setEmail(mail)} />

                <TextInput
                    style={styles.input}
                    isRequired
                    value={password}
                    placeholder="Password"
                    onChangeText={(pass) => setPassword(pass)}
                    secureTextEntry />
                <Pressable onPress={() => handleSubmit()} style={styles.show}>

                    <Text style={styles.text} >Log In</Text>

                </Pressable>

            </View>
            <Text style={styles.register} onPress={() => navigation.navigate('SignUp')}>You still don't have an account? go to SignUp!</Text>
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