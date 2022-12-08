import React from 'react'
import { useEffect, useRef } from 'react'
import hotelsActions from '../redux/actions/hotelsActions'
import { useDispatch, useSelector } from 'react-redux'
import { Image, View, StyleSheet, ImageBackground, ScrollView, Text, Pressable, FlatList, TextInput } from 'react-native'


export default function AllHotels() {

  const { getHotels, filter } = hotelsActions
  let hotels = useSelector(state => state.hotelsReducer.hotels)
  const dispatch = useDispatch()
  let { initial, text, order } = useSelector(state => state.hotelsReducer)

  useEffect(() => {
    if (initial) {
      dispatch(getHotels())
    }

    // eslint-disable-next-line    
  }, [])

  function filtrar(e) {
    // setWord(search.current.value)
    console.log(e)
    dispatch(filter({

      text: e,
      order: 'desc'
    })
    )
  }


  return (


    <FlatList
      data={hotels}
      ItemSeparatorComponent={<View style={{ margin: 10 }} />}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <View style={styles.input}>
          <TextInput
            style={{ height: 20 }}
            placeholder="Search an hotel"
            onChangeText={filtrar}

            defaultValue={text}
          />
        </View>
      }
      renderItem={({ item }) =>

        <Pressable style={styles.pressable} >
          <ImageBackground
            source={{ uri: item.photo[0] }}
            style={styles.hotelsContainer}
            // resizeMode='cover'
            key={item._id}>
            <View style={styles.content}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>Capacity: {item.capacity}</Text>
            </View>
          </ImageBackground>
        </Pressable>

      }
    />

  )
}
const styles = StyleSheet.create({
  hotelsContainer: {
    flex: 1,
    width: '100%',
    height: 250,
    borderRadius: 10,
    alignSelf: 'center',

    // backgroundColor: 'black'
  },
  container: {
    justifyContent: 'center',
    backgroundColor: '#dda0dd',
    paddingHorizontal: 20,
  },
  contenedor: {
    width: '100%',
    height: 250,

    justifyContent: 'center'
  },
  pressable: {
    borderColor: 'white',
    borderWidth: 7,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    padding: 10,
    backgroundColor: 'white',
    margin: 7,
    borderRadius: 20,
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