import { combineReducers } from "@reduxjs/toolkit";
import playerReducer from './player/playerSlice';
import entitiesReducer from './entities/entitiesReducer';

export default combineReducers({
  player: playerReducer,
  entities: entitiesReducer
});