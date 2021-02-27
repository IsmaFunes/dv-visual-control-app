import { combineReducers } from "@reduxjs/toolkit";
import videosReducer from './videos/videosSlice';

export default combineReducers({
  videos: videosReducer
});