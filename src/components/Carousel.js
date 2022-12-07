import React from 'react'
import citiesAction from '../redux/actions/citiesAction'
import { useEffect, useState} from 'react'
import hotelsActions from '../redux/actions/hotelsActions'
import {useDispatch, useSelector} from 'react-redux'
import {Image, View, StyleSheet, ImageBackground } from 'react-native'


export default function carousel() {
    let [numero, setNumero]= useState(0)
    let [id, setId]=useState()
    const {getHotels } = hotelsActions
    const {getCities} = citiesAction 
    let hotels= useSelector (state=> state.hotelsReducer.hotels)
    let city = useSelector(store => store.citiesReducer.cities)
    let {  initial} = useSelector (state=> state.hotelsReducer)
    const dispatch = useDispatch()
  
    useEffect(()=>{
  
      if (initial){
        dispatch(getHotels())
      }
      dispatch(getCities())
    
        // eslint-disable-next-line    
    },[])
  console.log(hotels)
  return (
    <View style={{ width: '100%' }}>
            <ScrollView
                style={{ height: 300, width: '100%' }}
                horizontal
                pagingEnabled>
                {hotels?.map((hotels) => (
                    <View style={{ height: '100%', width: dimension.width }} key={hotels._id}>
                        <ImageBackground
                            source={{ uri: `${hotels.photo}` }} key={hotels._id}
                            style={styles.imageBackground}>
                            <Text style={styles.text}>{hotels.name}</Text>

                        </ImageBackground>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
imageBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    opacity: 0.8,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 15
},  text:{
    paddingTop: 1,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

