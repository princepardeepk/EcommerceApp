import {combineReducers} from '@reduxjs/toolkit';
import home from './homeSlice';

const appReducer = combineReducers({
  home,
});

export default appReducer;
