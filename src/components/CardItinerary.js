import React from 'react'
import { Text, View, Image, StyleSheet, Pressable } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react'
import actionForReaction from "../redux/actions/actionForReaction"
import Likes from './Likes'


export default function CardItinerary({ _id, citiId, name, photo1, description, duration, price }) {
  let { reactions, getReactions } = actionForReaction
  let dispatch = useDispatch()
  let { allReactions } = useSelector(state => state.reactionReducer)
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgzOGNiOWY5NzlmODMzMDBjYjJmNDYiLCJuYW1lIjoiSm9hIiwibGFzdE5hbWUiOiJHYW0iLCJwaG90byI6Imh0dHBzOi8vcG5nLnBuZ3RyZWUuY29tL3BuZy12ZWN0b3IvMjAyMTAyMTkvb3VybGFyZ2UvcG5ndHJlZS1mcmVuY2gtYnVsbGRvZy1kb2ctY3V0ZS1wZXQtcG5nLWltYWdlXzI5MjIwNjYuanBnIiwibG9nZ2VkIjp0cnVlLCJpYXQiOjE2NzA2MDM1OTEsImV4cCI6MTY3MDY4OTk5MX0.Xf5isaK4kkdAylm1j9s9qNCt6CXZQeCp-I32Qq5_Oa0'
  let itiId = '636d940f4605d7c06fe17075'
  let count = 2

  useEffect(() => {
    let headers = { headers: { Authorization: `Bearer ${token}` } }
    dispatch(getReactions({ key: itinerary._id, headers }))
  }, [])

  return (
    <Pressable style={styles.pressable}>
      <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.50)', padding: 4, margin: 4, borderRadius: 12, alignItems: 'center' }}>
        <Text style={{ textAlign: 'center' }}>{name}</Text>
        <Image style={{ width: 295, height: 140, margin: 10, resizeMode: 'cover' }} source={{ uri: photo1 }} />
        <View style={{ display: 'flex', alignItems: 'center', }}>
          <Text style={{ textAlign: 'center' }}>{description}</Text>
          <Text style={{ textAlign: 'center' }}>Duration: {duration} hours</Text>
          <Text style={{ textAlign: 'center' }}>$ {price}</Text>
        </View>
        <View style={{ width: '100%', height: 50, display: 'flex', flexDirection: 'row', }}>
          {allReactions?.filter((reaction) => (reaction.itineraryId === itiId)).map((i) => (<Likes key={i._id} name={i.name} icon={i.icon} count={count} />))}
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 10,
    margin: 15,
    alignItems: 'center',
  },
})
