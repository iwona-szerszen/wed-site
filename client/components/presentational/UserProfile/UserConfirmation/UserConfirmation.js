import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserConfirmation extends Component {
	constructor(props) {
		super(props);
	}
	renderConfirmPresence() {
		return (
			<form onSubmit={event => props.onSubmitConfirmPresence(event)}>
				<div className='form-group row'>
	            	<label htmlFor='names' className='col-sm-3 col-form-label'>Names</label>
	            	<div className='col-sm-9'>
	            		<input
	                  		type='text'
	                  		className='form-control'
	                  		id='names'
	                   		value={this.props.user.names}
	                   		disabled
	                	/>
	              	</div>
	            </div>
	            <div className='form-group'>
		            <div className='custom-control custom-radio'>
						<input
							type='radio'
							value='true'
							onChange={event => this.props.onChangePresenceInput(event)}
							checked={this.props.presenceForm.userAttended == 'true'} 
							className='custom-control-input'
							id='attended'
							name='userAttended'
							ref='presenceConfirmation'
							required
						/>
						<label
							className='custom-control-label'
							htmlFor='attended'>Yes, I am going to attended the wedding ceremony
						</label>
					</div>
					<div className='custom-control custom-radio'>
  						<input
  							type='radio'
  							value='false'
  							onChange={event => this.props.onChangePresenceInput(event)}
  							checked={this.props.presenceForm.userAttended == 'false'}
  							className='custom-control-input'
  							id='notAttended'
  							name='userAttended'
  						/>
  						<label
  							className='custom-control-label'
  							htmlFor='notAttended'>No, I will not be able to attended the wedding ceremony
  						</label>
					</div>
				</div>
	            <div className='form-group row'>
	            	<label htmlFor='total-members' className='col-sm-3 col-form-label'>Total members</label>
	            	<div className='col-sm-9'>
	            		<input
	                  		type='number'
	                  		value={this.props.presenceForm.userTotalMembers}
	                  		onChange={event => this.props.onChangePresenceInput(event)}
	                  		className='form-control'
	                  		name='userTotalMembers'
	                  		id='total-members'
	                  		ref='totalMembers'
	                  		min='1'
	                  		max={this.props.user.totalMembers}
	                  		step='1'
	                  		required
	                	/>
	              	</div>
	            </div>
	            <div className='form-group row'>
		            <div className='col-sm-12'>
		            	<button className='btn btn-success'>Send</button>
		            </div>
		        </div>
			</form>
		);
	}
	renderEditConfirmation() {
		return (
			<div>Edit</div>
		);
	}
	render() {
		return (
			<div>
				{this.props.user.responded ? this.renderEditConfirmation() : this.renderConfirmPresence()}
			</div>
		);
	}
};

UserConfirmation.propTypes = {
	user: PropTypes.object,
	presenceForm: PropTypes.object,
	onSubmitConfirmPresence: PropTypes.func,
	onChangePresenceInput: PropTypes.func,
	//onSubmitEditConfirmation: PropTypes.func,
};

export default UserConfirmation;

/*

class UserConfirmation extends Component {
	onSubmitConfirmPresence(event) {
	    const presenceConfirmationRef = this.refs.presenceConfirmation;
	    const totalMembersRef = this.refs.totalMembers;
	    if (totalMembersRef.value) {
	    	console.log(presenceConfirmationRef.checked);
	    	this.props.onSubmitConfirmPresence(event, presenceConfirmationRef.checked, totalMembersRef.value);
	    }
	}
	renderConfirmPresence() {
		return (
			<form onSubmit={event => this.onSubmitConfirmPresence(event)}>
				<div className='form-group row'>
	            	<label htmlFor='names' className='col-sm-3 col-form-label'>Names</label>
	            	<div className='col-sm-9'>
	            		<input
	                  		type='text'
	                  		className='form-control'
	                  		id='names'
	                   		value={this.props.user.names}
	                   		disabled
	                	/>
	              	</div>
	            </div>
	            <div className='form-group'>
		            <div className='custom-control custom-radio'>
						<input
							type='radio'
							className='custom-control-input'
							id='attended'
							name='presence-confirmation'
							ref='presenceConfirmation'
							required
						/>
						<label
							className='custom-control-label'
							htmlFor='attended'>Yes, I am going to attended the wedding ceremony
						</label>
					</div>
					<div className='custom-control custom-radio'>
  						<input
  							type='radio'
  							className='custom-control-input'
  							id='notAttended'
  							name='presence-confirmation'
  						/>
  						<label
  							className='custom-control-label'
  							htmlFor='notAttended'>No, I will not be able to attended the wedding ceremony
  						</label>
					</div>
				</div>
	            <div className='form-group row'>
	            	<label htmlFor='total-members' className='col-sm-3 col-form-label'>Total members</label>
	            	<div className='col-sm-9'>
	            		<input
	                  		type='number'
	                  		className='form-control'
	                  		id='total-members'
	                  		ref='totalMembers'
	                  		min='1'
	                  		max={this.props.user.totalMembers}
	                  		step='1'
	                  		defaultValue={this.props.user.totalMembers}
	                  		required
	                	/>
	              	</div>
	            </div>
	            <div className='form-group row'>
		            <div className='col-sm-12'>
		            	<button className='btn btn-success'>Send</button>
		            </div>
		        </div>
			</form>
		);
	}
	renderEditConfirmation() {
		return (
			<div>Edit</div>
		);
	}
	render() {
		return (
			<div>
				{this.props.user.responded ? this.renderEditConfirmation() : this.renderConfirmPresence()}
			</div>
		);
	}
};

*/