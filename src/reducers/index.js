import { combineReducers } from 'redux';
import authReducer from './authReducer';
import fetchAllReducer from './fetchAllReducer'

export default combineReducers({
  authReducer,
  fetchAllReducer
});
