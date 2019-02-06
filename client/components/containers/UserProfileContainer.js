import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { testGuestId } from '../../../server/config';

// Import Components
import UserProfile from '../presentational/UserProfile/UserProfile';

// Import Actions
import { fetchGuestRequest, editGuestRequest } from '../../actions/GuestActions';
import { cancelPresentReservationRequest } from '../../actions/PresentActions';
import { addDedicationRequest, deleteDedicationRequest } from '../../actions/DedicationActions';

// Import Selector
import { getUserGuest } from '../../reducers/GuestReducer';

class UserProfileContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTabKey: 'confirmation',
			userAttended: '',
			userTotalMembers: this.props.guest.totalMembers,
		};
	}
	componentDidMount() {
		this.props.dispatch(fetchGuestRequest(testGuestId));
		//this.props.dispatch(fetchGuestRequest(this.props.params.id));
		//console.log(this.props.params.id);
	}
	handleChangeTab(tabKey) {
		this.setState({
			activeTabKey: tabKey,
		});
	}
	handleChangePresenceInput(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
		console.log(this.state);
	}
	handleSubmitConfirmPresence(event) {
		event.preventDefault();
		console.log(this.state);
		// if 'Yes...' radio button was checked
		if (this.state.userAttended) {
			const guest = {
				totalMembers: this.state.userTotalMembers,
				responded: true,
				attended: this.state.userAttended,
			};
			return guest;
		} else {
			const guest = {
				totalMembers: this.props.guest.totalMembers,
				responded: true,
				attended: this.state.userAttended,
			};
			return guest;
		}
		this.props.dispatch(editGuestRequest(testGuestId, guest));
	}
	handleSubmitEditConfirmation() {
		return;
	}
	handleCancelPresentReservation(presentId) {
		if (confirm('Do you want to cancel reservation of this present?')) {
			this.props.dispatch(cancelPresentReservationRequest(presentId, testGuestId));
		}
	}
	handleSubmitAddDedication(event, song, content) {
		event.preventDefault();
		const dedication = {
			song,
			content,
			from: this.props.guest._id,
		};
		this.props.dispatch(addDedicationRequest(dedication, testGuestId));
	}
	handleDeleteDedication(dedicationId) {
		if (confirm('Do you want to delete this dedication?')) {
			this.props.dispatch(deleteDedicationRequest(dedicationId, testGuestId));
		}
	}
	render() {
		const presenceForm = {
			userAttended: this.state.userAttended,
			userTotalMembers: this.state.userTotalMembers,
		};
		return (
			<UserProfile
				guest={this.props.guest}
				presenceForm={presenceForm}
				activeTabKey={this.state.activeTabKey}
				handleChangeTab={this.handleChangeTab.bind(this)}
				handleChangePresenceInput={this.handleChangePresenceInput.bind(this)}
				handleSubmitConfirmPresence={this.handleSubmitConfirmPresence.bind(this)}
				handleSubmitEditConfirmation={this.handleSubmitEditConfirmation.bind(this)}
				handleCancelPresentReservation={this.handleCancelPresentReservation.bind(this)}
				handleSubmitAddDedication={this.handleSubmitAddDedication.bind(this)}
				handleDeleteDedication={this.handleDeleteDedication.bind(this)}
			/>
		);
	}
};

// Actions required to provide data for this component to render in server side
UserProfileContainer.need = [() => { return fetchGuestRequest(testGuestId); }];
//UserProfileContainer.need = [params => { return fetchGuestRequest(params.id); }];
//UserProfileContainer.need = [ownProps => { return fetchGuestRequest(ownProps.params.id); }];
//UserProfileContainer.need = [];

// Retrieve data from store as props
function mapStateToProps(state) {
	return {
		guest: getUserGuest(state),
	};
}

UserProfileContainer.propTypes = {
	guest: PropTypes.object,
	presenceForm: PropTypes.object,
	dispatch: PropTypes.func,
};

UserProfileContainer.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(UserProfileContainer);

/*

	handleSubmitConfirmPresence(event, presenceConfirmation, totalMembers) {
		event.preventDefault();
		// if 'Yes...' radio button was checked
		if (presenceConfirmation) {
			const guest = {
				totalMembers,
				responded: true,
				attended: true,
			};
			return guest;
		} else {
			const guest = {
				totalMembers: this.props.guest.totalMembers,
				responded: true,
				attended: false,
			};
			return guest;
		}
		this.props.dispatch(editGuestRequest(testGuestId, guest));
	}

*/