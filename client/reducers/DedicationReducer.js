import { ADD_DEDICATIONS, ADD_DEDICATION, EDIT_DEDICATION, DELETE_DEDICATION } from '../actions/DedicationActions';

// Initial State
const initialState = { data: [] };

const DedicationReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_DEDICATIONS:		
			return {
				data: action.dedications,
			};
		case ADD_DEDICATION:
			const newDedication = Object.assign({}, action.dedication, {from: action.guestUpdated.names});
			return {
				data: [...state, newDedication],
			};
		case DELETE_DEDICATION:
			return {
				data: state.data.filter(dedication => dedication._id !== action.dedicationId),
			};






/*
		case EDIT_DEDICATION:
			return {
				data: state.data.map(dedication => {
					return dedication.id === action.id ? Object.assign({}, dedication, action.dedication) : dedication;
				}),
			};
*/
		default:
			return state;
	}
};

// Selector: Get all dedications
export const getDedications = state => state.dedications.data;

export default DedicationReducer;

/*


Selectors

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];
*/
