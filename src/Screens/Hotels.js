import React from 'react'
import { useEffect, useState } from 'react'
import hotelsActions from '../redux/actions/hotelsActions'
import { useDispatch, useSelector } from 'react-redux'
import { Image, View, StyleSheet, ImageBackground, ScrollView, Text, Dimensions, FlatList } from 'react-native'
import Hotels from '../components/Hotels'

export default function AllHotels() {



  return (
    <View style={styles.container}>
      <Hotels />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },

  text: {
    paddingTop: 1,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  secundaryText: {
    color: '#c71585',
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
  }
})