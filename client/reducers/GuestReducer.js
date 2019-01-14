import { ADD_GUESTS, EDIT_GUEST } from '../actions/GuestActions';

// Initial State
const initialState = { data: [] };

const GuestReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_GUESTS:
			return {
				data: action.guests,
			};
		case EDIT_GUEST:
			return {
				data: state.data.map(guest => {
					return guest.id === action.id ? Object.assign({}, guest, action.guest) : guest;
				}),
			};
		default:
			return state;
	}
};

// Selector: Get all guests
export const getGuests = state => state.guests.data;

export default GuestReducer;