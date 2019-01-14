import callApi from '../util/apiCaller';

// Export Constants
export const ADD_GUESTS = 'ADD_GUESTS';
export const EDIT_GUEST = 'EDIT_GUEST';

// Export Actions
export function fetchGuestsRequest() {
	return dispatch => {
		return callApi('guests').then(res => dispatch(addGuests(res)));
	};
}

export function addGuests(guests) {
	return {
		type: ADD_GUESTS,
		guests,
	};
}

export function editGuestRequest(id, guest) {
	return dispatch => {
		return callApi(`guests/${id}`, 'put', {
			guest: {
				totalMembers: guest.totalMembers,
				confirmed: guest.confirmed,
				attended: guest.attended,
			},
		}).then(res => dispatch(editGuest(id, res)));
	};
}

export function editGuest(id, guest) {
	return {
		type: EDIT_GUEST,
		id,
		guest,
	};
}