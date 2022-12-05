import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../Api/url'

const getHotels = createAsyncThunk('gethotels', async () => {
  try {
    let respuesta = await axios.get(`${BASE_URL}/api/hotels/`)
    let hotels = respuesta.data.response
    return {
      succes: true,
      hotels
    }
  }
  catch (error) {
    return {
      success: false,
      response: error.response.data.response
    }
  }
})

const filter = createAsyncThunk('filter', async (filtros) => {
  let { text, order } = filtros
  try {
    let respuesta = await axios.get(`${BASE_URL}/api/hotels/?order=${order}&name=${text}`)
    if (respuesta.data.success) {
      return {
        success: true,
        response: { text: text, order: order, hotels: respuesta.data.response }
      }
    } else {
      return {
        success: false,
        response: { text: text, order: order, hotels: [] }
      }
    }
  }
  catch (error) {
    return {
      success: false,
      response: error.message
    }
  }
})

const deleteHotel = createAsyncThunk('deleteHotel', async (data) => {
  const { id, token } = data
  let headers = { headers: { 'Authorization': `Bearer ${token}` } }
  try {
    let respuesta = await axios.delete(`${BASE_URL}/api/hotels/${id}`, headers)
    return {
      success: true,
      hoteldeleted: respuesta.data.hoteldeleted
    }
  } catch (error) {
    return {
      success: false,
      response: error.message
    }
  }
})

const hotelsActions = {
  getHotels,
  filter,
  deleteHotel,
}

export default hotelsActions