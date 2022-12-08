import React from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../Api/url'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function MyReactions() {
  // const { _id } = useSelector((store) => store.userReducer)
  let _id = "63838cb9f979f83300cb2f46"
  let [likes, setLikes] = useState([])
  // let { token } = useSelector(state => state.userReducer)
  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgzOGNiOWY5NzlmODMzMDBjYjJmNDYiLCJuYW1lIjoiSm9hIiwibGFzdE5hbWUiOiJHYW0iLCJwaG90byI6Imh0dHBzOi8vcG5nLnBuZ3RyZWUuY29tL3BuZy12ZWN0b3IvMjAyMTAyMTkvb3VybGFyZ2UvcG5ndHJlZS1mcmVuY2gtYnVsbGRvZy1kb2ctY3V0ZS1wZXQtcG5nLWltYWdlXzI5MjIwNjYuanBnIiwibG9nZ2VkIjp0cnVlLCJpYXQiOjE2NzA1MjQ3NTksImV4cCI6MTY3MDYxMTE1OX0.cpqdmw3LNW97lfJ93j5uEDxl882yiRsRT0K2vV542TY"

  useEffect(() => {
    let headers = { headers: { Authorization: `Bearer ${token}` } }
    axios.get(`${BASE_URL}reactions?userId=` + _id, headers)
      .then(res => setLikes(res.data.response))
      .catch(error => console.log(error.message))
  }, [_id])

  return (
    <Pressable style={styles.pressable}>
      {likes?.map((i) => (
        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.40)', padding: 4, margin: 4, borderRadius: 12 , alignItems:'center'}} key={i._id}>
          <Text style={{ textAlign: 'center' }}>{i.itineraryId.name}</Text>
          <Image style={{ width: 295, height: 140, margin: 10 , resizeMode:'cover' }} source={{uri : i.itineraryId.photo[0]}} />
          <View style={{display:'flex', flexDirection:'row', alignItems:'center', }}>
          <Text style={{ textAlign: 'center' }}>Reaction: {i.name}</Text>
          <Image style={{ width: 60, height: 60, margin: 6 , marginHorizontal: 16}} source={{uri : i.icon}} />
          </View>
        </View>
      ))}
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

