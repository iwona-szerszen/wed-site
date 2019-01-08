import { ADD_DEDICATIONS, ADD_DEDICATION, EDIT_DEDICATION, DELETE_DEDICATION } from '../reducers/DedicationReducer';

// Initial State
const initialState = { data: [] };

const DedicationReducer = (state = initialState, action) => {
	console.log(`action: ${action.type} ${action.dedications}`);
	switch (action.type) {
		case ADD_DEDICATIONS:		
			return {
				data: action.dedications,
			};
		case ADD_DEDICATION:
			return {
				data: [...state.data, action.dedication],
			};
		case EDIT_DEDICATION:
			return {
				data: state.data.map(dedication => {
					return dedication.id === action.id ? Object.assign({}, dedication, action.dedication) : dedication;
				}),
			};
		case DELETE_DEDICATION:
			return {
				data: state.data.filter(dedication => dedication.id !== action.id),
			};
		default:
			return state;
	}
};

// Selector: Get all dedications
//export const getDedications = state => state.dedications.data;
export const getDedications = state => {
	console.log(`length of array state.dedications.data : ${state.dedications.data.length}`);
	return state.dedications.data;
}

export default DedicationReducer;

/*
    case THUMB_UP_POST :
      return {
        data: state.data.map(post => {
          return post.cuid === action.cuid ? Object.assign({}, post, {voteCount: post.voteCount + 1}) : post;
        }),
      };

Selectors

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];
*/
