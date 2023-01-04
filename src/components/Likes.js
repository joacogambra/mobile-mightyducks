import React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'


export default function Likes(props) {
    let {name, icon, iconBack, count} = props
    return (
        <View style={styles.containerView}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: "bold", fontSize: 24 }}>{count}</Text>
            <Image style={{ width: 40,height:40, margin: 4, resizeMode: 'cover' }} source={{ uri: icon }} />        
        </View>
    )
}

const styles = StyleSheet.create({
    containerView: {
        display:'flex',
        flexDirection:'row',
        width:'100%',
        height:50,
    }
})