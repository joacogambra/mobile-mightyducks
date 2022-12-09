import React from 'react'
import { Text, View, Image, StyleSheet , Pressable } from 'react-native'


export default function CardItinerary({_id, citiId, name, photo1, description, duration, price}) {

  return (
    <Pressable style={styles.pressable}>  
      <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.50)', padding: 4, margin: 4, borderRadius: 12 , alignItems:'center'}}>
        <Text style={{ textAlign: 'center' }}>{name}</Text>
        <Image style={{ width: 295, height: 140, margin: 10 , resizeMode:'cover' }} source={{uri : photo1}} />
        <View style={{display:'flex', alignItems:'center', }}>
        <Text style={{ textAlign: 'center' }}>{description}</Text>
        <Text style={{ textAlign: 'center' }}>Duration: {duration} hours</Text>
        <Text style={{ textAlign: 'center' }}>$ {price}</Text>     
        </View>
      </View>
  </Pressable>
  )
}

const styles = StyleSheet.create({
    pressable: {
      borderRadius: 10,
      margin:15,
      alignItems:'center',
    },
  })
