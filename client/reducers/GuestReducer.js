import { LOAD_GUESTS, LOAD_GUEST, EDIT_GUEST } from '../actions/GuestActions';
import { CANCEL_PRESENT_RESERVATION } from '../actions/PresentActions';
import { ADD_DEDICATION, EDIT_DEDICATION, DELETE_DEDICATION } from '../actions/DedicationActions';

// Initial State
const initialState = { 
	data: [],
	userGuest: {},
};

const GuestReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_GUESTS:
			return Object.assign({}, state, {data: action.guests});
		case LOAD_GUEST:
			return Object.assign({}, state, {userGuest: action.guest});
		case CANCEL_PRESENT_RESERVATION:
		case EDIT_GUEST:
		case ADD_DEDICATION:
		case EDIT_DEDICATION:
		case DELETE_DEDICATION:
			return Object.assign({}, state, {userGuest: action.guestUpdated});
		

		/*
		case EDIT_GUEST:
			return {
				data: state.data.map(guest => {
					return guest.id === action.id ? Object.assign({}, guest, action.guest) : guest;
				}),
			};
		*/

		default:
			return state;
	}
};

/* Selectors */

// Get all guests
export const getGuests = state => state.guests.data;

// Get userGuest
export const getUserGuest = state => state.guests.userGuest;

export default GuestReducer;