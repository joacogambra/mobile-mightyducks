import React from 'react'
import { View, Text, Image, Button, ImageBackground, StyleSheet, Pressable } from 'react-native'
import { useNavigation} from '@react-navigation/native'

export default function CardCities({ name, photo, continent, id, userId }) {
  let navigation = useNavigation()
  return (
    <Pressable style={styles.pressable}>
      <ImageBackground style={styles.backgroundCard} source={{ uri: photo }}>
        <View style={styles.content}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight:"bold" }}>{name}</Text>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight:"bold" }}>Continent: {continent}</Text>
        </View>
        <Button onPress={() => navigation.navigate('Itineraries')} title='More'></Button>
      </ImageBackground>  
    </Pressable>    
  )
}

const styles = StyleSheet.create({
  backgroundCard: {
    flex: 1,
    width: '100%',
    height: 250,
    borderRadius: 20,
    alignSelf: 'center',
  },
  pressable: {
    borderColor: 'white',
    borderWidth: 8,
    borderRadius: 10,
    margin: 12,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    textAlign:'center',
    height: '20%',
    backgroundColor: "rgba(0, 0, 0, 0.10)",
  },
})
