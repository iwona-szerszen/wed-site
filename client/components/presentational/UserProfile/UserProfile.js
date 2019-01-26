import React from 'react';
import PropTypes from 'prop-types';
import UserPresentList from './UserPresents/UserPresentList';
import AddDedication from './UserDedications/AddDedication';
import UserDedicationList from './UserDedications/UserDedicationList';

const UserProfile = props => {
	return (
		<div>
			<nav>
				<div className='nav nav-tabs' id='nav-tab' role='tablist'>
			    	<a className='nav-item nav-link active' id='nav-confirmation-tab' data-toggle='tab' href='#nav-confirmation' role='tab' aria-controls='nav-confirmation' aria-selected='true'>Presence confirmation</a>
			    	<a className='nav-item nav-link' id='nav-presents-tab' data-toggle='tab' href='#nav-presents' role='tab' aria-controls='nav-presents' aria-selected='false'>Reserved presents</a>
			    	<a className='nav-item nav-link' id='nav-dedications-tab' data-toggle='tab' href='#nav-dedications' role='tab' aria-controls='nav-dedications' aria-selected='false'>Music dedications</a>
			  	</div>
			</nav>
			<div className='tab-content' id='nav-tabContent'>
			  	<div className='tab-pane fade show active' id='nav-confirmation' role='tabpanel' aria-labelledby='nav-confirmation-tab'>
			  		confirmation
			  	</div>
			  	<div className='tab-pane fade' id='nav-presents' role='tabpanel' aria-labelledby='nav-presents-tab'>
			  		<UserPresentList
			  			userPresents={props.guest.presents}
			  			cancelPresentReservation={props.handleCancelPresentReservation}
			  		/>
			  	</div>
			  	<div className='tab-pane fade' id='nav-dedications' role='tabpanel' aria-labelledby='nav-dedications-tab'>
			  		<AddDedication
			  			onSubmit={props.handleOnSubmitForm}
			  			//addDedication={props.handleAddDedication}
			  		/>
			  		<UserDedicationList
			  			userDedications={props.guest.dedications}
			  			deleteDedication={props.handleDeleteDedication}
			  		/>
			  	</div>
			</div>
		</div>
	);
};

UserProfile.propTypes = {
	guest: PropTypes.object,
	handleOnSubmitForm: PropTypes.func,
	//handleAddDedication: PropTypes.func,
	handleCancelPresentReservation: PropTypes.func,
	handleDeleteDedication: PropTypes.func,
};

export default UserProfile;