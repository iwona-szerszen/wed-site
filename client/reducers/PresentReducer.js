import { ADD_PRESENTS, EDIT_PRESENT_RESERVATION } from '../actions/PresentActions';

// Initial State
const initialState = { data: [] };

const PresentReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRESENTS:
			return {
				data: action.presents,
			};
		case EDIT_PRESENT_RESERVATION:
			return {
				data: state.data.map(present => {
					return present.id === action.id ? Object.assign({}, present, {reserved: !present.reserved}) : present;
				}),
			};
		default:
			return state;
	}
};

// Selector: Get all presents
export const getPresents = state => state.presents.data;

export default PresentReducer;