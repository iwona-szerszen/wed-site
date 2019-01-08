/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import dedications from './reducers/DedicationReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  dedications,
});