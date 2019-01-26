import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { testGuestId } from '../../../server/config';

// Import Components
import UserProfile from '../presentational/UserProfile/UserProfile';

// Import Actions
import { fetchGuestRequest } from '../../actions/GuestActions';
import { cancelPresentReservationRequest } from '../../actions/PresentActions';
import { addDedicationRequest, deleteDedicationRequest } from '../../actions/DedicationActions';

// Import Selector
import { getUserGuest } from '../../reducers/GuestReducer';

class UserProfileContainer extends Component {
	componentDidMount() {
		this.props.dispatch(fetchGuestRequest(testGuestId));
		//this.props.dispatch(fetchGuestRequest(this.props.params.id));
	}
	handleOnSubmitForm(event, song, content) {
		event.preventDefault();
		const dedication = {
			song,
			content,
			from: this.props.guest._id,
		};
		this.props.dispatch(addDedicationRequest(dedication, testGuestId));
	}
	handleCancelPresentReservation(presentId) {
		if (confirm('Do you want to cancel reservation of this present?')) {
			this.props.dispatch(cancelPresentReservationRequest(presentId, testGuestId));
		}
	}
	handleDeleteDedication(dedicationId) {
		if (confirm('Do you want to delete this dedication?')) {
			this.props.dispatch(deleteDedicationRequest(dedicationId, testGuestId));
		}
	}
	render() {
		
		return (
			<UserProfile
				guest={this.props.guest}
				handleOnSubmitForm={this.handleOnSubmitForm.bind(this)}
				handleCancelPresentReservation={this.handleCancelPresentReservation.bind(this)}
				handleDeleteDedication={this.handleDeleteDedication.bind(this)}
			/>
		);
	}
};

// Actions required to provide data for this component to render in server side
UserProfileContainer.need = [() => { return fetchGuestRequest(testGuestId); }];

// Retrieve data from store as props
function mapStateToProps(state) {
	return {
		guest: getUserGuest(state),
	};
}

UserProfileContainer.propTypes = {
	guest: PropTypes.object,
	dispatch: PropTypes.func,
};

UserProfileContainer.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(UserProfileContainer);