import callApi from '../util/apiCaller';

// Export Constants
export const ADD_PRESENTS = 'ADD_PRESENTS';
export const EDIT_PRESENT_RESERVATION = 'EDIT_PRESENT_RESERVATION';

// Export Actions
export function fetchPresentsRequest() {
	return dispatch => {
		return callApi('presents').then(res => dispatch(addPresents(res)));
	};
}

export function addPresents(presents) {
	return {
		type: ADD_PRESENTS,
		presents,
	};
}

export function editPresentReservationRequest(id, present) {
	return dispatch => {
		return callApi(`presents/${id}`, 'put', {
			present: {
				reserved: !present.reserved,
			},
		}).then(() => dispatch(editPresentReservation(id)));
	}
}

export function editPresentReservation(id) {
	return {
		type: EDIT_PRESENT_RESERVATION,
		id,
	};
}