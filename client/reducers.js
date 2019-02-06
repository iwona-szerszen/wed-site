/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import guests from './reducers/GuestReducer';
import presents from './reducers/PresentReducer';
import dedications from './reducers/DedicationReducer';

export default combineReducers({
	app,
	guests,
	presents,
	dedications,
});