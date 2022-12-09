import { createReducer } from "@reduxjs/toolkit";
import showActions from '../actions/showActions'

const { deleteOneShow, read, allShows } = showActions
const initialState = {
  shows: [],
  success: '',
  all: []
}

const showReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(deleteOneShow.fulfilled, (state, action) => {
      return {
        ...state,
        shows: state.shows.filter((show) => show._id !== action.payload.showDeleted),
      }
    })
    .addCase(read.fulfilled, (state, action) => {

      return {
        ...state,
        shows: action.payload.response,
        success: true
      }

    })
    .addCase(read.rejected, (state, action) => {

      return {
        ...state,
        shows: [],
        success: false
      }

    })
    .addCase(allShows.fulfilled, (state, action) => {

      return {
        ...state,
        all: action.payload.response,
        success: true
      }

    })
})

export default showReducer