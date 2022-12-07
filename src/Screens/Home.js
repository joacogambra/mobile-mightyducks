import { View, Text, StyleSheet, Image, ImageBackground, Button } from 'react-native'
import React from 'react'
import Carousel from '../components/Carousel'

export default function Home() {
const backgroundImage= {uri:'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/501000/501690-barceloneta-beach.jpg'}

  return (
    <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
    <View style={styles.container}>
      <Image source={require('./../../assets/logoICON.png')} style={styles.image}/>
      <Text style={styles.text}>Catch the trade winds in your sail. 
          <Text style={styles.secundaryText}>Explore.. Dream..Discover</Text>
      </Text>
        <View style={styles.displayButton}>

           <Button title='Hotels' style={styles.button}/>

           <Button title='Cities' style={styles.button}/>
        </View>
    </View>
    </ImageBackground>
  )
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    backgroundImage:{
      opacity: 0.7,
      height:400
    },
    image:{
      width: 150,
      height: 150,
    },
    text:{
      paddingTop: 1,
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    secundaryText:{
      color: '#9b59b6',
      fontWeight: 'bolder',
      fontSize:20,
    },
    displayButton:{
      width: 100,
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems:'center',
      gap: '2rem',
    },
    button: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 4,
      backgroundColor: "oldlace",
      alignSelf: "flex-start",
      marginHorizontal: "1%",
      marginBottom: 6,
      minWidth: "48%",
      textAlign: "center",
    },
})