import { View, Text, StyleSheet, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import Carousel from '../components/Carousel'

export default function Home() {
  const backgroundImage = { uri: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/501000/501690-barceloneta-beach.jpg' }

  return (
    <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('./../../assets/logoICON.png')} style={styles.image} />
        <Text style={styles.text}>Catch the trade winds in your sail.
          <Text style={styles.secundaryText}>Explore.. Dream..Discover</Text>
        </Text>
        <View style={styles.displayButton}>

          <Pressable style={styles.button}>
            <Text style={styles.text}>Hotels</Text>
          </Pressable>

          <Pressable style={styles.button}>
            <Text style={styles.text}>Cities</Text>
          </Pressable>
        </View>
      </View>
      <Carousel />
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    opacity: 0.7,
    flex: 1,
    // height:400
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    paddingTop: 1,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  secundaryText: {
    color: '#9b59b6',
    fontWeight: 'bolder',
    fontSize: 20,
    textAlign: 'center'
  },
  displayButton: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',

  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "#dda0dd",
    alignSelf: "flex-start",
    marginHorizontal: 5,
    marginBottom: 6,
    minWidth: "30%",
    textAlign: "center",
  },
})