import React from 'react'
import { useEffect, useRef } from 'react'
import hotelsActions from '../redux/actions/hotelsActions'
import { useDispatch, useSelector } from 'react-redux'
import { Image, View, StyleSheet, ImageBackground, ScrollView, Text, Pressable, FlatList, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker'



export default function AllHotels({ navigation }) {

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
        <>
          <View style={styles.input}>
            <TextInput
              style={{ height: 20, color: 'black' }}
              placeholder="Search an hotel"
              onChangeText={filtrar}
              defaultValue={text}
            />

          </View>
          <View style={styles.order}>
            <Picker
              style={{ textAlign: 'center' }}
              selectedValue={order}
              onValueChange={(itemValue) =>
                dispatch(filter({ text: text, order: itemValue }))
              }>
              <Picker.Item label="Desc" value="desc" />
              <Picker.Item label="Asc" value="asc" />
            </Picker>
          </View>


        </>
      }
      renderItem={({ item }) =>

        hotels && (<Pressable style={styles.pressable}
          onPress={() => navigation.navigate('Hotel Selected', { id: item._id })} >
          <ImageBackground
            source={{ uri: item.photo[0] }}
            style={styles.hotelsContainer}
            // resizeMode='cover'
            key={item._id}>
            <View style={styles.content}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>Capacity: {item.capacity}</Text>
              <Text style={styles.text}> See more..</Text>
            </View>
          </ImageBackground>

        </Pressable>)

      }
      ListEmptyComponent={() => (
        hotels.length === 0 ? (<View>
          <ImageBackground source={require('../../assets/lost.png')}
            style={styles.hotelsContainer}>
            <View style={styles.content}>
              <Text style={styles.text}> Not Matched!</Text>
            </View>
          </ImageBackground>
        </View>) : (hotels)
      )}

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
    paddingBottom: 20,
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
  order: {
    height: 35,
    width: '30%',
    backgroundColor: 'white',
    marginBottom: 30,
    borderRadius: 30,
    textAlign: 'auto',

  }
})