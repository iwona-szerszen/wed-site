import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Components
import DedicationList from '../presentational/Dedications/DedicationList';

// Import Actions
import { fetchDedicationsRequest } from '../../actions/DedicationActions';

// Import Selector
import { getDedications } from '../../reducers/DedicationReducer';

class DedicationListContainer extends Component {	
  componentDidMount() {
    this.props.dispatch(fetchDedicationsRequest());
  }
  render() {
  	return (
  		<div>
  			<DedicationList dedications={this.props.dedications} />
  		</div>
  	);
  }
};

// Actions required to provide data for this component to render in server side
DedicationListContainer.need = [() => { return fetchDedicationsRequest(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
	console.log('running mapStateToProps');
  return {
    dedications: getDedications(state),
  };
}

DedicationListContainer.propTypes = {
	dedications: PropTypes.array,
	dispatch: PropTypes.func,
};

DedicationListContainer.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(DedicationListContainer);