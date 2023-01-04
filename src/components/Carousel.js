import React from 'react'
import citiesAction from '../redux/actions/citiesAction'
import { useEffect } from 'react'
// import hotelsActions from '../redux/actions/hotelsActions'
import { useDispatch, useSelector } from 'react-redux'
import { Image, View, StyleSheet, ImageBackground, ScrollView, Text, Dimensions, FlatList } from 'react-native'


export default function carousel() {

  const { getCities } = citiesAction
  let city = useSelector(store => store.citiesReducer.cities)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getCities())

    // eslint-disable-next-line    
  }, [])
  const dimension = Dimensions.get('window').width;

  return (
    <View style={{ width: dimension.width, flex: 1 }}>
      <FlatList
        data={city}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}

        renderItem={({ item, index }) => {
          return <ImageBackground style={styles.imageBackground} source={{ uri: item.photo }} >

            <View style={styles.container}>
              <Text style={styles.text}> {item.name}</Text>
            </View>

          </ImageBackground>

        }}


      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: Dimensions.get('window').width,
    height: '90%',
    resizeMode: 'cover',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 15,
    margin: 5,
  }, text: {
    paddingTop: 1,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

