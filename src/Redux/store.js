import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

const RootReducer = combineReducers({
    counter: counterReducer
})

export const store = configureStore({
    reducer: RootReducer
  })